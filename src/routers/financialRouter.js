import { Router } from "express";

import {
  ensureAuthMiddleware,
} from "../middlewares/index.js";

import { financialController } from "../controllers/index.js";

const financialRouter = Router();

financialRouter.post("/financial-events", ensureAuthMiddleware, financialController.createFinancialEvent);

financialRouter.get("/financial-events", ensureAuthMiddleware, financialController.getFinancialEvents);

financialRouter.get("/financial-events/sum", ensureAuthMiddleware, financialController.sumFinancialEvents);

export default financialRouter;