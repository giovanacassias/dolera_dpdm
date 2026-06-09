import db from "./SQLiteDatabase";
import Database from "./SQLiteDatabase";

export type Trip = {
  id: number;
  name: string;
  currency: string;
  budget: number;
  startDate: string;
  finishDate: string;
};

export default class TripRepository {
  constructor() {
    this.up();
  }

  public async up() {
    await db.runAsync(`
        CREATE TABLE IF NOT EXISTS trips (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            name TEXT, 
            currency TEXT, 
            budget REAL, 
            startDate TEXT, 
            finishDate TEXT
        )`);
  }

  public async down() {
    await db.runAsync(`
        DROP TABLE trips;
        `);
  }

  public async create(trip: Trip) {
    const result = await db.runAsync(
      `
        INSERT INTO trips (id, name, currency, budget, startDate, finishDate) values (?, ?, ?, ?, ?, ?);
        `,
      [
        trip.id,
        trip.name,
        trip.currency,
        trip.budget,
        trip.startDate,
        trip.finishDate,
      ],
    );

    return result.lastInsertRowId;
  }

  public async all() {
    const result = await db.getAllAsync<Trip>(`
        SELECT * FROM trips
        `);
    return result;
  }
}
