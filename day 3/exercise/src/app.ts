/** @format */

import express, { Application, NextFunction, Request, Response } from "express";
import { ExpensesRouter } from "./routers/expense.router";
import { ErrorResponse } from "./helpers/response";
import { PORT } from "./config";
import { validateApiKey } from "./middlewares/validate";

export class App {
  private app: Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.errorHandler();
  }
  private config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded());
    this.app.use("/images", express.static(__dirname + "/public"));
    this.app.use(validateApiKey);
  }
  private routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("welcome to my api");
    });
    this.app.use("/expenses", new ExpensesRouter().getRouter());
  }
  private errorHandler() {
    this.app.use("*", (req: Request, res: Response) => {
      res.status(404).json({ success: false, message: "route not found" });
    });
    this.app.use(
      (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
        res
          .status(err.statusCode)
          .json({ success: false, message: err.message });
      }
    );
  }
  public start() {
    this.app.listen(PORT, () => {
      console.log("server is running on port " + PORT);
    });
  }
}
