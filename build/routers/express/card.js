"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handle_Card = void 0;
const express_1 = __importDefault(require("express"));
class Handle_Card {
    constructor() {
        this.routerGroup = express_1.default.Router();
    }
    create() {
        return this.routerGroup.post('/card', async (req, res) => {
            res.json({
                'p': 'q'
            });
        });
    }
}
exports.Handle_Card = Handle_Card;
