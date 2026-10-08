14. APPLICATION ARCHITECTURE
Recommended architecture:
┌───────────────────────────────────────┐
│             React Native UI           │
├───────────────────────────────────────┤
│              Screens                  │
│                                       │
│ Dashboard                             │
│ Add Transaction                       │
│ Transactions                          │
│ Transaction Details                   │
│ Reports                               │
│ Settings                              │
├───────────────────────────────────────┤
│              Services                 │
│                                       │
│ Database Service                      │
│ Report Service                        │
│ Excel Service                         │
│ PDF Service                           │
│ File Sharing Service                  │
├───────────────────────────────────────┤
│              SQLite                   │
├───────────────────────────────────────┤
│            Android Device             │
└───────────────────────────────────────┘

15. RECOMMENDED PROJECT STRUCTURE
ExpenseTracker/
│
├── assets/
│
├── src/
│   │
│   ├── components/
│   │   ├── ExpenseCard.js
│   │   ├── SummaryCard.js
│   │   ├── FilterBar.js
│   │   ├── SearchBar.js
│   │   ├── CategorySelector.js
│   │   └── EmptyState.js
│   │
│   ├── screens/
│   │   ├── DashboardScreen.js
│   │   ├── AddExpenseScreen.js
│   │   ├── TransactionsScreen.js
│   │   ├── ExpenseDetailsScreen.js
│   │   ├── ReportsScreen.js
│   │   └── SettingsScreen.js
│   │
│   ├── database/
│   │   ├── database.js
│   │   ├── migrations.js
│   │   └── expenseRepository.js
│   │
│   ├── services/
│   │   ├── reportService.js
│   │   ├── excelService.js
│   │   ├── pdfService.js
│   │   └── sharingService.js
│   │
│   ├── utils/
│   │   ├── dateUtils.js
│   │   ├── currencyUtils.js
│   │   └── validation.js
│   │
│   ├── constants/
│   │   ├── categories.js
│   │   └── colors.js
│   │
│   └── navigation/
│       └── AppNavigator.js
│
├── App.js
├── app.json
├── package.json
└── README.md

16. DEFAULT CATEGORIES
The application should initially provide:
🍔 Food
🛒 Grocery
🚕 Travel
⛽ Fuel
🛍️ Shopping
💊 Medical
💡 Bills
🏠 Household
🎓 Education
🎬 Entertainment
📱 Mobile/Internet
💼 Work
📦 Other

The user should eventually be able to add custom categories.
17. USER EXPERIENCE
Home
Dashboard
   │
   ├── Total Expense
   ├── Transaction Count
   ├── Category Summary
   ├── Recent Transactions
   │
   └── + Add Transaction

Transactions
Transactions
   │
   ├── Search
   ├── Filter
   ├── Sort
   │
   └── Transaction List

Reports
Reports
   │
   ├── Select Month
   ├── Summary
   ├── Category Breakdown
   ├── Generate Excel
   └── Generate PDF

18. Technology requirements:

- React Native
- Expo
- JavaScript
- SQLite
- Android-first design
- Offline-first architecture
- No backend server
- No authentication required for V1

Do not replace React Native with Flutter, Kotlin,
Java or native Android development.

Use clean, modular and maintainable code.

Implement the project incrementally.

Phase 1:
- Create Expo project
- Configure navigation
- Create SQLite database
- Create database tables
- Create default categories

Phase 2:
- Dashboard
- Add Transaction
- Transaction validation
- Save transaction to SQLite

Phase 3:
- Transaction history
- Search
- Date filtering
- Store filtering
- Category filtering
- Amount filtering
- Combined filters
- Sorting

Phase 4:
- Transaction details
- Edit transaction
- Delete transaction

Phase 5:
- Dashboard statistics
- Monthly calculations
- Category summaries

Phase 6:
- Excel report generation
- PDF report generation
- Android file sharing

Phase 7:
- UI/UX refinement
- Error handling
- Empty states
- Loading states
- Performance optimization
- Testing

All transaction data must remain on the device.

The application must continue working without internet access.

Do not introduce unnecessary backend services or cloud
databases.

Ensure that exported reports contain accurate data
from SQLite and respect the selected month/filter.

19. VERSION 1 ACCEPTANCE CRITERIA
The application will be considered complete when:
- [ ] User can add a cash expense.
- [ ] Transaction is stored in SQLite.
- [ ] Transaction remains after app restart.
- [ ] User can view all transactions.
- [ ] User can search by store name.
- [ ] User can search transaction description.
- [ ] User can filter by date.
- [ ] User can filter by store.
- [ ] User can filter by category.
- [ ] User can filter by amount.
- [ ] User can combine multiple filters.
- [ ] User can sort transactions.
- [ ] User can open transaction details.
- [ ] User can edit transactions.
- [ ] User can delete transactions.
- [ ] Dashboard calculates total expenses.
- [ ] Dashboard calculates transaction count.
- [ ] Dashboard calculates average transaction.
- [ ] Dashboard shows highest transaction.
- [ ] Dashboard shows category totals.
- [ ] User can select a month.
- [ ] User can generate monthly Excel statement.
- [ ] User can generate monthly PDF statement.
- [ ] User can share generated files.
- [ ] App works without internet.
- [ ] No transaction data is sent to an external server.
- [ ] Application handles empty database correctly.
- [ ] Application validates invalid amounts and missing fields.
- [ ] Application handles thousands of transactions reasonably efficiently.
20. FINAL PRODUCT CONCEPT
The finished application should essentially work as a personal offline cash ledger:
                EXPENSE TRACKER
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
     RECORD          SEARCH         REPORT
        │              │              │
        ▼              ▼              ▼
    Cash Entry      Filters        Monthly
        │              │              │
        ▼              ▼         ┌────┴────┐
     SQLite       Transactions    ▼         ▼
       DB                         PDF      Excel

Core principle:  
Record once → Store locally → Search anytime → Filter anything → Generate monthly statement.