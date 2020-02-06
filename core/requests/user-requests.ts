import { Request, Response } from 'express';
import Database from '../database/database';
import { MysqlError } from 'mysql';
import ResponseMessages from '../utils/response-messages';
import User from './../../web/chat-app/src/models/other/User';
import ErrorResponse from './../../web/chat-app/src/models/responses/ErrorResponse';
import LoginResponse from './../../web/chat-app/src/models/responses/LoginResponse';
import RegisterResponse from './../../web/chat-app/src/models/responses/RegisterResponse';
import LoginRequest from './../../web/chat-app/src/models/requests/LoginRequest';
import RegisterRequest from './../../web/chat-app/src/models/requests/RegisterRequest';
import Passwords from '../utils/password-hash';
import JWTHandler from '../utils/jwt-handler';

export default class UserRequest{
    public static login(req: Request, res: Response): void{
        const body: LoginRequest = req.body;

        Database.query(
            'SELECT username, password, status FROM Users WHERE username = ?',
            [body.username],
            (result: User[], err: MysqlError | null) => {
                if(err != null){
                    console.log(err);
                    res.status(500).send(ErrorResponse.create(500, ResponseMessages.INTERNAL_SERVER_ERROR));
                    return;
                }

                if(result.length == 0 || !Passwords.verify(body.password, result[0].password)){
                    res.status(400).send(ErrorResponse.create(400, ResponseMessages.LOGIN_FAILED));
                    return;
                }

                const token: string = JWTHandler.get(result[0].username);
                res.setHeader('auth', token);
                res.status(200).send(LoginResponse.create(new User(result[0].username, '', result[0].status), token));
                return;
            }
        );
    }

    public static register(req: Request, res: Response): void{
        const body: RegisterRequest = req.body;

        if(body.username == '' || body.password == '' || body.repeatPassword == '' || body.password !== body.repeatPassword){
            res.status(400).send(ErrorResponse.create(400, ResponseMessages.BAD_REQUEST));
            return;
        }

        if(body.password.length < 5){
            res.status(400).send(ErrorResponse.create(400, ResponseMessages.PASSWORD_REQUIREMENTS_NOT_FULFILLED));
            return;
        }

        Database.query(
            'SELECT * FROM Users WHERE username = ?',
            [body.username],
            (result: User[], err: MysqlError | null) => {
                if(err != null){
                    console.log(err);
                    res.status(500).send(ErrorResponse.create(500, ResponseMessages.INTERNAL_SERVER_ERROR));
                    return;
                }

                if(result.length > 0){
                    res.status(400).send(ErrorResponse.create(400, ResponseMessages.USERNAME_ALREADY_TAKEN));
                    return;
                }

                const status: string = 'Hey :) I\'m using Pelican';

                Database.query(
                    'INSERT INTO Users (username, password, status) VALUES (?, ?, ?)',
                    [
                        body.username,
                        Passwords.encrypt(body.password),
                        status
                    ],
                    (result: any, err: MysqlError | null) => {
                        if(err != null){
                            console.log(err);
                            res.status(500).send(ErrorResponse.create(500, ResponseMessages.INTERNAL_SERVER_ERROR));
                            return;
                        }

                        const token: string = JWTHandler.get(body.username);
                        res.setHeader('auth', token);
                        res.status(200).send(RegisterResponse.create(new User(body.username, '', status), token));
                        return;
                    }
                );
            }
        );
    }

    public static updateStatus(req: Request, res: Response): void{

    }
}