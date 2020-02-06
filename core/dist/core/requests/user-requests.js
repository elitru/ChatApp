"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../database/database"));
var response_messages_1 = __importDefault(require("../utils/response-messages"));
var User_1 = __importDefault(require("./../../web/chat-app/src/models/other/User"));
var ErrorResponse_1 = __importDefault(require("./../../web/chat-app/src/models/responses/ErrorResponse"));
var LoginResponse_1 = __importDefault(require("./../../web/chat-app/src/models/responses/LoginResponse"));
var RegisterResponse_1 = __importDefault(require("./../../web/chat-app/src/models/responses/RegisterResponse"));
var password_hash_1 = __importDefault(require("../utils/password-hash"));
var jwt_handler_1 = __importDefault(require("../utils/jwt-handler"));
var UserRequest = /** @class */ (function () {
    function UserRequest() {
    }
    UserRequest.login = function (req, res) {
        var body = req.body;
        database_1.default.query('SELECT username, password, status FROM Users WHERE username = ?', [body.username], function (result, err) {
            if (err != null) {
                console.log(err);
                res.status(500).send(ErrorResponse_1.default.create(500, response_messages_1.default.INTERNAL_SERVER_ERROR));
                return;
            }
            if (result.length == 0 || !password_hash_1.default.verify(body.password, result[0].password)) {
                res.status(400).send(ErrorResponse_1.default.create(400, response_messages_1.default.LOGIN_FAILED));
                return;
            }
            var token = jwt_handler_1.default.get(result[0].username);
            res.setHeader('auth', token);
            res.status(200).send(LoginResponse_1.default.create(new User_1.default(result[0].username, '', result[0].status), token));
            return;
        });
    };
    UserRequest.register = function (req, res) {
        var body = req.body;
        if (body.username == '' || body.password == '' || body.repeatPassword == '' || body.password !== body.repeatPassword) {
            res.status(400).send(ErrorResponse_1.default.create(400, response_messages_1.default.BAD_REQUEST));
            return;
        }
        if (body.password.length < 5) {
            res.status(400).send(ErrorResponse_1.default.create(400, response_messages_1.default.PASSWORD_REQUIREMENTS_NOT_FULFILLED));
            return;
        }
        database_1.default.query('SELECT * FROM Users WHERE username = ?', [body.username], function (result, err) {
            if (err != null) {
                console.log(err);
                res.status(500).send(ErrorResponse_1.default.create(500, response_messages_1.default.INTERNAL_SERVER_ERROR));
                return;
            }
            if (result.length > 0) {
                res.status(400).send(ErrorResponse_1.default.create(400, response_messages_1.default.USERNAME_ALREADY_TAKEN));
                return;
            }
            var status = 'Hey :) I\'m using Pelican';
            database_1.default.query('INSERT INTO Users (username, password, status) VALUES (?, ?, ?)', [
                body.username,
                password_hash_1.default.encrypt(body.password),
                status
            ], function (result, err) {
                if (err != null) {
                    console.log(err);
                    res.status(500).send(ErrorResponse_1.default.create(500, response_messages_1.default.INTERNAL_SERVER_ERROR));
                    return;
                }
                var token = jwt_handler_1.default.get(body.username);
                res.setHeader('auth', token);
                res.status(200).send(RegisterResponse_1.default.create(new User_1.default(body.username, '', status), token));
                return;
            });
        });
    };
    UserRequest.updateStatus = function (req, res) {
    };
    return UserRequest;
}());
exports.default = UserRequest;
