7.1 Entity Relationship Diagram — ERD
                    ┌───────────────────┐
                    │      USERS        │
                    ├───────────────────┤
                    │ PK user_id        │
                    │    name           │
                    │    created_at     │
                    └─────────┬─────────┘
                              │
                              │ 1
                              │
                              │
                              │ N
                    ┌─────────▼─────────┐
                    │    EXPENSES       │
                    ├───────────────────┤
                    │ PK expense_id     │
                    │ FK user_id        │
                    │ FK category_id    │
                    │    amount         │
                    │    store_name     │
                    │    payment_method │
                    │    description    │
                    │    expense_date   │
                    │    created_at     │
                    │    updated_at     │
                    └─────────┬─────────┘
                              │
                              │ N
                              │
                              │ 1
                    ┌─────────▼─────────┐
                    │    CATEGORIES     │
                    ├───────────────────┤
                    │ PK category_id    │
                    │    category_name  │
                    │    icon           │
                    └───────────────────┘
Note
For a single-user offline application, the USERS table is technically optional.
A simpler implementation can use:
CATEGORIES 1 ─────── N EXPENSES

with no user table.
I recommend the simpler single-user database for Version 1.
8. RECOMMENDED FINAL DATABASE
expenses
CREATE TABLE expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    amount REAL NOT NULL,
    store_name TEXT NOT NULL,
    category_id INTEGER NOT NULL,
    payment_method TEXT NOT NULL DEFAULT 'Cash',
    description TEXT,
    expense_date TEXT NOT NULL,
    created_at TEXT NOT NULL,
    updated_at TEXT,
    FOREIGN KEY (category_id)
        REFERENCES categories(id)
);

categories
CREATE TABLE categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    icon TEXT
);

