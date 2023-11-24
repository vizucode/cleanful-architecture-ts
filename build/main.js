"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_register_1 = require("./controller/express/express_register");
const card_1 = require("./repositories/prisma/card");
const card_2 = require("./usecases/card/card");
// dependency injection
const usecaseCard = new card_2.Uc_Card_Impl(new card_1.Prisma_Card_Impl());
const rest = new express_register_1.Express_Register(usecaseCard);
rest.Runner();
