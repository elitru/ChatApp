"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var ErrorResponse_1 = __importDefault(require("./../../web/chat-app/src/models/responses/ErrorResponse"));
var response_messages_1 = __importDefault(require("./response-messages"));
var JWTHandler = /** @class */ (function () {
    function JWTHandler() {
    }
    JWTHandler.get = function (username) {
        return jsonwebtoken_1.default.sign({
            username: username,
            exp: Math.floor(Date.now()) + (60 * 60 * 24 * 7)
        }, this.secret);
    };
    JWTHandler.verify = function (req, res, next) {
        var headers = req.headers;
        if (typeof headers['auth'] !== 'undefined') {
            var decoded = jsonwebtoken_1.default.verify(headers['auth'], JWTHandler.secret);
            var expireDate = new Date(decoded.exp);
            if (expireDate > new Date()) {
                next(req, res);
                return;
            }
            res.status(401).send(ErrorResponse_1.default.create(401, response_messages_1.default.UNAUTHORIZED));
        }
        else {
            res.status(401).send(ErrorResponse_1.default.create(401, response_messages_1.default.UNAUTHORIZED));
            return;
        }
    };
    JWTHandler.secret = 'pelican';
    return JWTHandler;
}());
exports.default = JWTHandler;
