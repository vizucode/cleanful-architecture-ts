import express, { Router } from "express"
import { D_Card } from "../../domains/card"
import { ErrorHandler } from "../../errors/error"
import { I_Uc_Card } from "../../usecases/usecases"

export class Handle_Card {
    private router: Router
    private cardUsecase: I_Uc_Card

    constructor(uc_card: I_Uc_Card) {
        this.router = express.Router()
        this.cardUsecase = uc_card
    }

    private create(): Router {
        return this.router.post('/card', async (req, res) => {
            let title: string = req.body.title
            let color_id: number = req.body.color_id
            let status: boolean = req.body.status

            await this.cardUsecase.Create({
                Title: title,
                ColorId: color_id,
                Status: status,
            } as D_Card).then(() => {
                res.status(200).json({
                    'succes': true,
                    'message': 'data successfully created'
                })
            }).catch(err => {
                if (err instanceof ErrorHandler) {
                    res.status(err.statusCode).json({
                        'success': false,
                        'message': err.message,
                    })
                }else {
                    res.status(500).json({
                        'success': false,
                        'message': 'unexpected error'
                    })
                }
            })
        })
    }

    public GetRouters(): Router[] {
        let routerList: Router[] = []

        routerList.push(
            this.create(),
        )

        return routerList
    }
}
