/** @format */

export interface IExpense {
  id: number;
  title: string;
  amount: number;
  date: string;
  category: string;
  type: "expense" | "income";
  image: string;
}
