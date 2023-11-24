import { Express_Register } from "./controller/express/express_register";
import { I_Controller } from "./controller/interface";
import { Prisma_Card_Impl } from "./repositories/prisma/card";
import { Uc_Card_Impl } from "./usecases/card/card";

// dependency injection
const usecaseCard = new Uc_Card_Impl(new Prisma_Card_Impl())

const rest: I_Controller = new Express_Register(usecaseCard)
rest.Runner()