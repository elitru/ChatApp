"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegisterRequest = /** @class */ (function () {
    function RegisterRequest(username, password, repeatPassword) {
        this.username = '';
        this.password = '';
        this.repeatPassword = '';
        this.username = username;
        this.password = password;
        this.repeatPassword = repeatPassword;
    }
    return RegisterRequest;
}());
exports.default = RegisterRequest;
