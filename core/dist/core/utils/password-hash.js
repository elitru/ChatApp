"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var password_hash_1 = __importDefault(require("password-hash"));
var Passwords = /** @class */ (function () {
    function Passwords() {
    }
    Passwords.encrypt = function (password) {
        return password_hash_1.default.generate(password);
    };
    Passwords.verify = function (password, passwordCorrect) {
        return password_hash_1.default.verify(password, passwordCorrect);
    };
    return Passwords;
}());
exports.default = Passwords;
