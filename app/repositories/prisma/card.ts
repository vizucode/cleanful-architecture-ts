import { ErrorConstant } from "../../constants/error";
import { ErrorHandler, UnkownHandleError } from "../../errors/error";
import { M_Card } from "../../models/card";
import { I_Repo_Card } from "../repositores";
import {PrismaClient} from "@prisma/client"

export class Prisma_Card_Impl implements I_Repo_Card{
    private prismaCli: PrismaClient

    constructor() {
        this.prismaCli = new PrismaClient()
    }

    async FindAll(): Promise<M_Card[]> {
        try {
            const data = await this.prismaCli.card.findMany()
            if (data.length < 1){
                throw new ErrorHandler(ErrorConstant.ErrNotFoundMsg, ErrorConstant.ErrNotFound)
            }

            let cards: M_Card[] = []
            data.forEach((value, index) => {
                let card: M_Card = {
                    Id: value.id,
                    ColorId: value.ColorId,
                    Status: value.Status,
                    Title: value.Title
                }
                cards.push(card)
            })
            return cards

        } catch (err) {
            throw new ErrorHandler(UnkownHandleError(err).message, ErrorConstant.ErrInternalServer)
        }
    }

    async Find(id: number): Promise<M_Card> {
        try {
            const data  = await this.prismaCli.card.findFirstOrThrow({where: {
                id: id
            }})

            let card: M_Card = {
                Id: id,
                ColorId: data.ColorId,
                Status: data.Status,
                Title: data.Title
            }

            return card
        }catch(err) {
            throw new ErrorHandler(UnkownHandleError(err).message, ErrorConstant.ErrInternalServer)
        }
    }

    async Create(payload: M_Card): Promise<void> {
        try{
            await this.prismaCli.card.create({
                data:{
                    Title: payload.Title,
                    ColorId: payload.ColorId,
                    Status: payload.Status,
                }
            })
        }catch(err) {
            throw new ErrorHandler(UnkownHandleError(err).message, ErrorConstant.ErrInternalServer)
        }
    }
    
    async Update (payload: M_Card): Promise<void> {
        try{
            await this.prismaCli.card.update({
                data:{
                    Title: payload.Title,
                    ColorId: payload.ColorId,
                    Status: payload.Status,
                },
                where: {
                    id: payload.Id
                }
            })
        }catch(err) {
            throw new ErrorHandler(UnkownHandleError(err).message, ErrorConstant.ErrInternalServer)
        }
    }

    async Delete(id: number): Promise<void> {
        try{
            await this.prismaCli.card.delete({
                where: {
                    id: id
                }
            })
        }catch(err) {
            throw new ErrorHandler(UnkownHandleError(err).message, ErrorConstant.ErrInternalServer)
        }
    }

}