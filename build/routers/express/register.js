"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Express_Register = void 0;
const express_1 = __importDefault(require("express"));
const card_1 = require("./card");
class Express_Register {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
    }
    Runner() {
        const middleware = this.app.use((req, res, next) => {
            console.log('middleware here');
            return next();
        });
        middleware.use(this.Register());
        this.app.listen(this.port, () => {
            console.log(`running on port ${this.port}`);
        });
    }
    Register() {
        let routeList = [];
        const Card = new card_1.Handle_Card();
        routeList.push(Card.create());
        return routeList;
    }
}
exports.Express_Register = Express_Register;
