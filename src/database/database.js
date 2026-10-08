import * as SQLite from 'expo-sqlite';
import { DEFAULT_CATEGORIES } from '../constants/categories';
let database;
export async function initializeDatabase() {
  if (database) return database;
  database = await SQLite.openDatabaseAsync('expense-tracker.db');
  await database.execAsync(`PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON;
    CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL UNIQUE, icon TEXT);
    CREATE TABLE IF NOT EXISTS expenses (id INTEGER PRIMARY KEY AUTOINCREMENT, amount REAL NOT NULL, store_name TEXT NOT NULL, category_id INTEGER NOT NULL, payment_method TEXT NOT NULL DEFAULT 'Cash', description TEXT, expense_date TEXT NOT NULL, created_at TEXT NOT NULL, updated_at TEXT, FOREIGN KEY(category_id) REFERENCES categories(id));
    CREATE INDEX IF NOT EXISTS idx_expenses_date ON expenses(expense_date);
    CREATE INDEX IF NOT EXISTS idx_expenses_category ON expenses(category_id);`);
  for (const category of DEFAULT_CATEGORIES) await database.runAsync('INSERT OR IGNORE INTO categories(name,icon) VALUES(?,?)', category.name, category.icon);
  return database;
}
export async function getDatabase() { return database || initializeDatabase(); }
