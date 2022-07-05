import cors from "cors";
import express from "express";
import "express-async-errors";

import mainRouter from "./routers/index.js";

import {
  errorHandler,
} from "./middlewares/index.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(mainRouter);
app.use(errorHandler);

export default app;
