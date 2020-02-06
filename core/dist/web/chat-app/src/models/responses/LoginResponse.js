"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginResponse = /** @class */ (function () {
    function LoginResponse(user, token) {
        this.user = user;
        this.token = token;
    }
    LoginResponse.create = function (user, token) {
        return JSON.stringify(new LoginResponse(user, token));
    };
    return LoginResponse;
}());
exports.default = LoginResponse;
