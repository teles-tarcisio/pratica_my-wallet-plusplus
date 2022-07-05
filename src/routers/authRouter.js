import { Router } from "express";

import {
  checkSignUpBody,
  checkSignInBody,
 } from "../middlewares/index.js";

import {
  authController,
} from "../controllers/index.js";

const authRouter = Router();

authRouter.post("/sign-up", checkSignUpBody, authController.signUp);

authRouter.post("/sign-in", checkSignInBody, authController.signIn);

export default authRouter;