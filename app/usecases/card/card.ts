import { ErrorConstant } from "../../constants/error";
import { D_Card } from "../../domains/card";
import { ErrorHandler, UnkownHandleError } from "../../errors/error";
import { Repo_Card } from "../../repositories/repositores";
import { I_Card } from "../usecases";

export class UC_Card implements I_Card {
    protected repoCard: Repo_Card

    constructor(RepoCardImpl: Repo_Card) {
        this.repoCard = RepoCardImpl
    }

    async FindAll(): Promise<D_Card[]> {
        try {
            let cards = await this.repoCard.FindAll()

            const resp: D_Card[] = cards.map((value) => ({
                Id: value.Id,
                ColorId: value.ColorId,
                Status: value.Status,
                Title: value.Title
            } as D_Card))

            return resp
        }catch(err) {
            if (err instanceof ErrorHandler) {
                throw new ErrorHandler(UnkownHandleError(err).message, err.statusCode)
            }
            throw new ErrorHandler(UnkownHandleError(err).message, ErrorConstant.ErrInternalServer)
        }
    }

    async Find(id: number): Promise<D_Card> {
        try{
            let card = await this.repoCard.Find(id)

            const resp: D_Card = {
                Id: card.Id,
                ColorId: card.ColorId,
                Status: card.Status,
                Title: card.Title
            }

            return resp
        }catch(err) {
            if (err instanceof ErrorHandler) {
                throw new ErrorHandler(UnkownHandleError(err).message, err.statusCode)
            }
            throw new ErrorHandler(UnkownHandleError(err).message, ErrorConstant.ErrInternalServer)
        }
    }
    
    async Create(payload: D_Card): Promise<void> {
        try{

            await this.repoCard.Create({
                Id: payload.Id,
                Title: payload.Title,
                ColorId: payload.ColorId,
                Status: payload.Status,
            })

        }catch(err) {
            if (err instanceof ErrorHandler) {
                throw new ErrorHandler(UnkownHandleError(err).message, err.statusCode)
            }
            throw new ErrorHandler(UnkownHandleError(err).message, ErrorConstant.ErrInternalServer)
        }
    }
    
    async Update(payload: D_Card): Promise<void> {
        try{

            await this.repoCard.Update({
                Id: payload.Id,
                Title: payload.Title,
                ColorId: payload.ColorId,
                Status: payload.Status,
            })

        }catch(err) {
            if (err instanceof ErrorHandler) {
                throw new ErrorHandler(UnkownHandleError(err).message, err.statusCode)
            }
            throw new ErrorHandler(UnkownHandleError(err).message, ErrorConstant.ErrInternalServer)
        }
    }
    
    async Delete(id: number): Promise<void> {
        try{
            await this.repoCard.Delete(id)
        }catch(err) {
            if (err instanceof ErrorHandler) {
                throw new ErrorHandler(UnkownHandleError(err).message, err.statusCode)
            }
            throw new ErrorHandler(UnkownHandleError(err).message, ErrorConstant.ErrInternalServer)
        }
    }
}