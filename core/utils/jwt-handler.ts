import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import ErrorResponse from './../../web/chat-app/src/models/responses/ErrorResponse';
import ResponseMessages from './response-messages';

export default class JWTHandler{
    private static secret: string = 'pelican';

    public static get(username: string): string{
        return jwt.sign({
            username: username,
            exp: Math.floor(Date.now()) + (60 * 60 * 24 * 7)
        }, this.secret);
    }

    public static verify(req: Request, res: Response, next: Function): void{
        const headers: any = req.headers;

        if(typeof headers['auth'] !== 'undefined'){
            const decoded: any | object = jwt.verify(headers['auth'], JWTHandler.secret);
            const expireDate: Date = new Date(decoded.exp);
            
            if(expireDate > new Date()){
                next(req, res);
                return;
            }

            res.status(401).send(ErrorResponse.create(401, ResponseMessages.UNAUTHORIZED));
        }else{
            res.status(401).send(ErrorResponse.create(401, ResponseMessages.UNAUTHORIZED));
            return;
        }
    }
}