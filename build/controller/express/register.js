"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Express_Register = void 0;
const express_1 = __importDefault(require("express"));
const card_1 = require("./card");
require("dotenv/config");
class Express_Register {
    constructor(CardUsecase) {
        this.app = (0, express_1.default)();
        const port = process.env.SERVER_PORT || "8080";
        this.port = parseInt(port);
        // dependency
        this.usecaseCard = CardUsecase;
    }
    Runner() {
        // edit here, if u want some middleware
        const middleware = this.app.use((req, res, next) => {
            return next();
        });
        middleware.use(this.register());
        this.app.listen(this.port, () => {
            console.log(`running on port ${this.port}`);
        });
    }
    register() {
        let routeList = [];
        const Card = new card_1.Handle_Card(this.usecaseCard);
        routeList.push(...Card.GetRouters());
        return routeList;
    }
}
exports.Express_Register = Express_Register;
