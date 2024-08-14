/** @format */

import { Request, Response } from "express";
import { readData, writeData } from "../helpers/fs";
import { generateId, rupiah } from "../helpers/generator";
import { IExpense } from "../interfaces/expenses.interface";
import { ErrorResponse, successResponse } from "../helpers/response";
import { expense } from "../helpers/constant";

export class ExpenseController {
  public getAll(req: Request, res: Response) {
    const data = readData();
    res.send(successResponse("get all expenses", data.expenses));
  }
  public getDetail(req: Request, res: Response) {
    const data = readData();
    const { id } = req.params;
    const expense = data.expenses.find((item) => item.id == Number(id));
    if (expense === undefined)
      throw new ErrorResponse("expense not found", 404);
    res.send(successResponse("get expense detail", expense));
  }
  public create(req: Request, res: Response) {
    const data = readData();
    const newExpense: IExpense = req.body;
    newExpense.id = generateId();
    data.expenses.push(newExpense);
    writeData(data);
    res.send(successResponse("create new expense", newExpense));
  }
  public update(req: Request, res: Response) {
    const data = readData();
    const { id } = req.params;
    const index = data.expenses.findIndex((item) => item.id == Number(id));
    if (index === -1) throw new ErrorResponse("expense not found", 404);
    data.expenses[index] = { ...data.expenses[index], ...req.body };
    writeData(data);
    res.send(successResponse("update expense", data.expenses[index]));
  }
  public delete(req: Request, res: Response) {
    const data = readData();
    const { id } = req.params;
    const index = data.expenses.findIndex((item) => item.id == Number(id));
    if (index === -1) throw new ErrorResponse("expense not found", 404);
    data.expenses.splice(index, 1);
    writeData(data);
    res.send(successResponse("delete expense", data.expenses[index]));
  }

  public getTotalByDateRange(req: Request, res: Response) {
    const data = readData();
    const { startDate, endDate } = req.query;
    if (startDate === undefined || endDate === undefined) {
      throw new ErrorResponse("startDate and endDate is required", 400);
    }
    const total = data.expenses.reduce((sum, item) => {
      const date = new Date(item.date);
      if (
        date >= new Date(String(startDate)) &&
        date <= new Date(String(endDate)) &&
        item.type.toLowerCase() === expense
      )
        return sum + item.amount;

      return sum;
    }, 0);
    res.send(successResponse("get expenses by date range", rupiah(total)));
  }

  public getTotalByCategory(req: Request, res: Response) {
    const data = readData();
    const { category } = req.query;
    if (category === undefined)
      throw new ErrorResponse("category is required", 400);

    const total = data.expenses.reduce(
      (sum, item) =>
        String(category).toLowerCase() === item.category.toLowerCase() &&
        item.type.toLowerCase() === expense
          ? sum + item.amount
          : sum,
      0
    );
    res.send(
      successResponse("get expenses by category " + category, rupiah(total))
    );
  }
}
