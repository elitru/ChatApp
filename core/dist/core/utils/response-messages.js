"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseMessages = /** @class */ (function () {
    function ResponseMessages() {
    }
    ResponseMessages.INTERNAL_SERVER_ERROR = 'An internal server error occured! Please contact an admin.';
    ResponseMessages.UNAUTHORIZED = 'To access this endpoint, you need to be authenticated!';
    ResponseMessages.BAD_REQUEST = 'Bad request! You are either missing some paramaters or you paramaters have incompatible values';
    ResponseMessages.LOGIN_FAILED = 'Username or password was incorrect!';
    ResponseMessages.PASSWORD_REQUIREMENTS_NOT_FULFILLED = 'Your password must be at least 5 characters long';
    ResponseMessages.USERNAME_ALREADY_TAKEN = 'This username is already taken! Try another one.';
    return ResponseMessages;
}());
exports.default = ResponseMessages;
