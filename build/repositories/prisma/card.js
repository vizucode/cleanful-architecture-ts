"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prisma_Card_Impl = void 0;
const error_1 = require("../../constants/error");
const error_2 = require("../../errors/error");
const client_1 = require("@prisma/client");
class Prisma_Card_Impl {
    constructor() {
        this.prismaCli = new client_1.PrismaClient();
    }
    async FindAll() {
        try {
            const data = await this.prismaCli.card.findMany();
            if (data.length < 1) {
                throw new error_2.ErrorHandler(error_1.ErrorConstant.ErrNotFoundMsg, error_1.ErrorConstant.ErrNotFound);
            }
            let cards = [];
            data.forEach((value, index) => {
                let card = {
                    Id: value.id,
                    ColorId: value.ColorId,
                    Status: value.Status,
                    Title: value.Title
                };
                cards.push(card);
            });
            return cards;
        }
        catch (err) {
            throw new error_2.ErrorHandler((0, error_2.UnkownHandleError)(err).message, error_1.ErrorConstant.ErrInternalServer);
        }
    }
    async Find(id) {
        try {
            const data = await this.prismaCli.card.findFirstOrThrow({ where: {
                    id: id
                } });
            let card = {
                Id: id,
                ColorId: data.ColorId,
                Status: data.Status,
                Title: data.Title
            };
            return card;
        }
        catch (err) {
            throw new error_2.ErrorHandler((0, error_2.UnkownHandleError)(err).message, error_1.ErrorConstant.ErrInternalServer);
        }
    }
    async Create(payload) {
        try {
            await this.prismaCli.card.create({
                data: {
                    Title: payload.Title,
                    ColorId: payload.ColorId,
                    Status: payload.Status,
                }
            });
        }
        catch (err) {
            throw new error_2.ErrorHandler((0, error_2.UnkownHandleError)(err).message, error_1.ErrorConstant.ErrInternalServer);
        }
    }
    async Update(payload) {
        try {
            await this.prismaCli.card.update({
                data: {
                    Title: payload.Title,
                    ColorId: payload.ColorId,
                    Status: payload.Status,
                },
                where: {
                    id: payload.Id
                }
            });
        }
        catch (err) {
            throw new error_2.ErrorHandler((0, error_2.UnkownHandleError)(err).message, error_1.ErrorConstant.ErrInternalServer);
        }
    }
    async Delete(id) {
        try {
            await this.prismaCli.card.delete({
                where: {
                    id: id
                }
            });
        }
        catch (err) {
            throw new error_2.ErrorHandler((0, error_2.UnkownHandleError)(err).message, error_1.ErrorConstant.ErrInternalServer);
        }
    }
}
exports.Prisma_Card_Impl = Prisma_Card_Impl;
