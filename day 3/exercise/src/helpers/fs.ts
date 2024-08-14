/** @format */

import { readFileSync, writeFileSync } from "fs";
import { IData } from "../interfaces/expenses.interface";
const path = __dirname + "/../data.json";

export const readData = (): IData => JSON.parse(readFileSync(path, "utf-8"));

export const writeData = (data: IData): void =>
  writeFileSync(path, JSON.stringify(data));
