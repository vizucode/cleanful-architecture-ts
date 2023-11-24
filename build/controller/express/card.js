"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handle_Card = void 0;
const express_1 = __importDefault(require("express"));
const error_1 = require("../../errors/error");
class Handle_Card {
    constructor(uc_card) {
        this.router = express_1.default.Router();
        this.cardUsecase = uc_card;
    }
    create() {
        return this.router.post('/card', async (req, res) => {
            let title = req.body.title;
            let color_id = req.body.color_id;
            let status = req.body.status;
            await this.cardUsecase.Create({
                Title: title,
                ColorId: color_id,
                Status: status,
            }).then(() => {
                res.status(200).json({
                    'succes': true,
                    'message': 'data successfully created'
                });
            }).catch(err => {
                if (err instanceof error_1.ErrorHandler) {
                    res.status(err.statusCode).json({
                        'success': false,
                        'message': err.message,
                    });
                }
                else {
                    res.status(500).json({
                        'success': false,
                        'message': 'unexpected error'
                    });
                }
            });
        });
    }
    GetRouters() {
        let routerList = [];
        routerList.push(this.create());
        return routerList;
    }
}
exports.Handle_Card = Handle_Card;
