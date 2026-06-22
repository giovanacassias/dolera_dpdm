import db from "./SQLiteDatabase";

export type Expense = {
  id: number;
  trip_id: number;
  category_id: number;
  name: string;
  note: string;
  date: string;
  amount: number;
};

export type ExpenseForm = Omit<Expense, "id">;

export default class ExpenseRepository {
  constructor() {
    this.up();
  }

  public async up() {
    await db.runAsync(`
        CREATE TABLE IF NOT EXISTS expenses (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            trip_id INTEGER, 
            category_id INTEGER, 
            name TEXT, 
            note TEXT,
            date TEXT, 
            amount REAL
        )`);
  }

  public async down() {
    await db.runAsync(`
        DROP TABLE expenses;
        `);
  }

  public async delete() {
    await db.runAsync(`DELETE FROM expenses`);
  }

  public async create(expense: ExpenseForm) {
    const result = await db.runAsync(
      `
        INSERT INTO expenses (trip_id, category_id, name, note, date, amount) values (?, ?, ?, ?, ?, ?);
        `,
      [
        expense.trip_id,
        expense.category_id,
        expense.name,
        expense.note,
        expense.date,
        expense.amount,
      ],
    );

    return result.lastInsertRowId;
  }

  public async all() {
    const result = await db.getAllAsync<Expense>(`SELECT * FROM expenses`);

    return result;
  }
}
