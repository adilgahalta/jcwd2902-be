/** @format */

import { Router } from "express";
import { ExpenseController } from "../controllers/expense.controller";

export class ExpensesRouter {
  private expensesController: ExpenseController;
  private router: Router = Router();
  constructor() {
    this.expensesController = new ExpenseController();
    this.routes();
  }
  private routes() {
    this.router.get("/", this.expensesController.getAll);
    this.router.get(
      "/total-by-date",
      this.expensesController.getTotalByDateRange
    );
    this.router.get(
      "/total-by-category",
      this.expensesController.getTotalByCategory
    );

    this.router.get("/:id", this.expensesController.getDetail);

    this.router.post("/", this.expensesController.create);
    this.router.patch("/:id", this.expensesController.update);
    this.router.delete("/:id", this.expensesController.delete);
  }
  public getRouter() {
    return this.router;
  }
}
