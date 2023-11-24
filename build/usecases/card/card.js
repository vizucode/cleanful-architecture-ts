"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uc_Card_Impl = void 0;
const error_1 = require("../../constants/error");
const error_2 = require("../../errors/error");
class Uc_Card_Impl {
    constructor(RepoCardImpl) {
        this.repoCard = RepoCardImpl;
    }
    async FindAll() {
        try {
            let cards = await this.repoCard.FindAll();
            const resp = cards.map((value) => ({
                Id: value.Id,
                ColorId: value.ColorId,
                Status: value.Status,
                Title: value.Title
            }));
            return resp;
        }
        catch (err) {
            if (err instanceof error_2.ErrorHandler) {
                throw new error_2.ErrorHandler((0, error_2.UnkownHandleError)(err).message, err.statusCode);
            }
            throw new error_2.ErrorHandler((0, error_2.UnkownHandleError)(err).message, error_1.ErrorConstant.ErrInternalServer);
        }
    }
    async Find(id) {
        try {
            let card = await this.repoCard.Find(id);
            const resp = {
                Id: card.Id,
                ColorId: card.ColorId,
                Status: card.Status,
                Title: card.Title
            };
            return resp;
        }
        catch (err) {
            if (err instanceof error_2.ErrorHandler) {
                throw new error_2.ErrorHandler((0, error_2.UnkownHandleError)(err).message, err.statusCode);
            }
            throw new error_2.ErrorHandler((0, error_2.UnkownHandleError)(err).message, error_1.ErrorConstant.ErrInternalServer);
        }
    }
    async Create(payload) {
        try {
            await this.repoCard.Create({
                Id: payload.Id,
                Title: payload.Title,
                ColorId: payload.ColorId,
                Status: payload.Status,
            });
        }
        catch (err) {
            if (err instanceof error_2.ErrorHandler) {
                throw new error_2.ErrorHandler((0, error_2.UnkownHandleError)(err).message, err.statusCode);
            }
            throw new error_2.ErrorHandler((0, error_2.UnkownHandleError)(err).message, error_1.ErrorConstant.ErrInternalServer);
        }
    }
    async Update(payload) {
        try {
            await this.repoCard.Update({
                Id: payload.Id,
                Title: payload.Title,
                ColorId: payload.ColorId,
                Status: payload.Status,
            });
        }
        catch (err) {
            if (err instanceof error_2.ErrorHandler) {
                throw new error_2.ErrorHandler((0, error_2.UnkownHandleError)(err).message, err.statusCode);
            }
            throw new error_2.ErrorHandler((0, error_2.UnkownHandleError)(err).message, error_1.ErrorConstant.ErrInternalServer);
        }
    }
    async Delete(id) {
        try {
            await this.repoCard.Delete(id);
        }
        catch (err) {
            if (err instanceof error_2.ErrorHandler) {
                throw new error_2.ErrorHandler((0, error_2.UnkownHandleError)(err).message, err.statusCode);
            }
            throw new error_2.ErrorHandler((0, error_2.UnkownHandleError)(err).message, error_1.ErrorConstant.ErrInternalServer);
        }
    }
}
exports.Uc_Card_Impl = Uc_Card_Impl;
