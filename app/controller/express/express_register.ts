import express, { Application, Router } from 'express';
import { I_Controller } from '../interface';
import { Handle_Card } from './card';
import "dotenv/config"
import { I_Uc_Card } from '../../usecases/usecases';
import bodyParser from 'body-parser';


export class Express_Register implements I_Controller {
    private app: Application
    private port: number

    private usecaseCard: I_Uc_Card

    constructor(CardUsecase: I_Uc_Card) {
        this.app = express()
        const port = process.env.SERVER_PORT || "8080"
        this.port = parseInt(port)

        // dependency
        this.usecaseCard = CardUsecase
    }

    public Runner(): void {
        // edit here, if u want some middleware
        let middleware  = this.app.use(bodyParser.json())
        middleware = this.app.use(bodyParser.urlencoded({ extended: true }))

        middleware.use(this.register())

        this.app.listen(this.port, () => {
            console.log(`running on port ${this.port}`)
        })
    }

    private register(): Router[] {
        let routeList: Router[] = []
        const Card: Handle_Card = new Handle_Card(this.usecaseCard)

        routeList.push(
            ...Card.GetRouters(),
        )

        return routeList
    }

}