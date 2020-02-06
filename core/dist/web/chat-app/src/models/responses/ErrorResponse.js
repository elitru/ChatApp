"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorResponse = /** @class */ (function () {
    function ErrorResponse(errorCode, errorMessage) {
        this.errorCode = errorCode;
        this.errorMesage = errorMessage;
    }
    ErrorResponse.create = function (errorCode, errorMesage) {
        return JSON.stringify(new ErrorResponse(errorCode, errorMesage));
    };
    return ErrorResponse;
}());
exports.default = ErrorResponse;
