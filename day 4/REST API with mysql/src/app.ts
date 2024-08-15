/** @format */
import express, { Application, NextFunction, Request, Response } from "express";
import { PORT } from "./config";
import { ErrorHandler, responseHandler } from "./helpers/response";
import db from "./lib/mysql";
import { StudentRouter } from "./routers/student.router";
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
  }
  private routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("welcome to my api");
    });
    this.app.use("/students", new StudentRouter().getRouter());
  }
  private errorHandler() {
    this.app.use("*", (req: Request, res: Response) => {
      res.status(404).send(responseHandler("page not found", null, false));
    });

    this.app.use(
      (
        error: ErrorHandler,
        req: Request,
        res: Response,
        next: NextFunction
      ) => {
        res
          .status(error.statusCode)
          .send(responseHandler(error.message, null, false));
      }
    );
  }
  public start() {
    this.app.listen(PORT, () => {
      console.log("server is running on port " + PORT);
    });
    db.getConnection((err, connection) => {
      if (err) {
        return console.log(err.message);
      }
      console.log("Success Connection", connection.threadId);
    });
  }
}
