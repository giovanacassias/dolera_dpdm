import { Category } from "./Category";

export type Expense = {
  id: number;
  name: string;
  note: string;
  date: string;
  amount: string;
  currency: string;
  categories: number[];
};
