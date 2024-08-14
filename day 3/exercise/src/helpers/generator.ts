/** @format */

import { readData } from "./fs";

export const generateId = () => {
  const data = readData();
  return data.expenses.length
    ? data.expenses[data.expenses.length - 1].id + 1
    : 1;
};

export const rupiah = (number: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
