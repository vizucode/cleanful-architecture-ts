"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnkownHandleError = exports.ErrorHandler = void 0;
class ErrorHandler extends Error {
    constructor(err, statusCode) {
        super(err);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, ErrorHandler.prototype);
    }
}
exports.ErrorHandler = ErrorHandler;
function UnkownHandleError(error) {
    let stringfiedError = "[something went wrong]";
    if (error instanceof Error)
        return error;
    try {
        stringfiedError = JSON.stringify(error);
    }
    catch { }
    return new Error(`this error thrown was not unexpected ${stringfiedError}`);
}
exports.UnkownHandleError = UnkownHandleError;
