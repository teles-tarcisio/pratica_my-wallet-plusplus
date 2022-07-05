import { Router } from "express";

import authRouter from "./authRouter.js";
import financialRouter from "./financialRouter.js";

const mainRouter = Router();

mainRouter.use(authRouter);
mainRouter.use(financialRouter);

export default mainRouter;