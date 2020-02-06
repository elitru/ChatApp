"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegisterResponse = /** @class */ (function () {
    function RegisterResponse(user, token) {
        this.user = user;
        this.token = token;
    }
    RegisterResponse.create = function (user, token) {
        return JSON.stringify(new RegisterResponse(user, token));
    };
    return RegisterResponse;
}());
exports.default = RegisterResponse;
