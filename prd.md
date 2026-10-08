1. PRODUCT REQUIREMENTS DOCUMENT (PRD)
1.1 Product Name
Expense Tracker
1.2 Product Type
Offline-first personal cash expense management Android application.
1.3 Platform
- Android
- Built using React Native
- Expo
- JavaScript
- Local SQLite database
- No mandatory internet connection
1.4 Product Objective
The purpose of Expense Tracker is to allow a user to quickly record every cash transaction/expense made at stores or to other people, securely store the information on the user's device, search and filter historical transactions, and generate monthly expense statements in Excel and PDF formats.
The application should be simple enough that recording a cash payment takes only a few seconds.
2. TARGET USER
Primary User
A person who wants to maintain a personal record of cash expenses.
Typical workflow
Pay Cash
   ↓
Open Expense Tracker
   ↓
Add Transaction
   ↓
Enter Amount
   ↓
Enter Store / Paid To
   ↓
Select Category
   ↓
Select/Confirm Date
   ↓
Optional Description
   ↓
Save
   ↓
Transaction stored locally

3. CORE FEATURES
3.1 Dashboard
The dashboard must display:
- Current month
- Total expenses
- Number of transactions
- Average transaction amount
- Highest transaction
- Category-wise expense summary
- Recent transactions
- Add Transaction button
Example:
October 2026

Total Expenses
₹12,850

Transactions
47

Average Transaction
₹273

Highest Transaction
₹2,500

3.2 Add Transaction
The user must be able to create a cash transaction.
Required fields
Field	Required
Amount	Yes
Store / Paid To	Yes
Category	Yes
Date	Yes
Payment Method	Yes/default Cash
Description	No


Example
Amount: ₹500
Store/Paid To: ABC Grocery
Category: Grocery
Date: 08/10/2026
Payment Method: Cash
Description: Monthly groceries

After pressing Save Transaction, the transaction must be saved in SQLite.
3.3 Cash Transaction
The primary purpose of the application is cash expense tracking.
The default payment method must be:
Cash
The architecture should nevertheless allow future payment methods such as:
- Cash
- UPI
- Card
- Bank Transfer
without requiring major database redesign.
3.4 Transaction History
The user must be able to view all saved transactions.
Each transaction should display:
- Date
- Store / Paid To
- Category
- Amount
- Payment method
Example:
08 Oct
ABC Grocery
Grocery
₹500
Cash

3.5 Search Transactions
The user must be able to search transactions.
Search should support:
Store name
Example:
Search: Reliance

The app should display transactions matching the store name.
Description
The search system may also search transaction descriptions.
3.6 Transaction Filtering
The user must be able to filter transactions using multiple criteria.
Date
- Today
- Yesterday
- This Week
- This Month
- Last Month
- Custom Date Range
Store / Paid To
Example:
Store: Reliance Fresh

Category
Examples:
- Food
- Grocery
- Travel
- Fuel
- Shopping
- Medical
- Bills
- Other
Amount
The application must support:
- Exact amount
- Greater than
- Less than
- Amount between two values
Example:
Minimum: ₹500
Maximum: ₹2,000

Payment Method
- Cash
- UPI
- Card
- Bank Transfer
Cash should be the default.
3.7 Combined Filtering
Filters must work together.
Example:
Date:
01/10/2026 - 31/10/2026

Store:
Reliance Fresh

Category:
Grocery

Minimum:
₹100

Maximum:
₹1,000

Payment:
Cash

The application must return only transactions satisfying all selected filters.
3.8 Sorting
Transactions should support sorting by:
- Newest first
- Oldest first
- Highest amount
- Lowest amount
- Store name A-Z
- Store name Z-A
Default:
Newest first
3.9 View Transaction Details
Tapping a transaction should open a detail screen containing:
Transaction Details

Amount
₹500

Store / Paid To
ABC Grocery

Category
Grocery

Payment Method
Cash

Date
08/10/2026

Description
Monthly groceries

Actions:
- Edit
- Delete
3.10 Edit Transaction
The user must be able to modify an existing transaction.
Editable fields:
- Amount
- Store / Paid To
- Category
- Date
- Payment method
- Description
3.11 Delete Transaction
The user must be able to delete a transaction.
A confirmation dialog must appear:
Delete Transaction?

This transaction will be permanently deleted.

[Cancel] [Delete]

3.12 Monthly Reports
The application must generate monthly expense statements.
User selects:
Reports
↓
Select Month
↓
October 2026

The application calculates:
- Total expenses
- Number of transactions
- Average expense
- Highest expense
- Category totals
- Detailed transaction list
3.13 Excel Export
The application must generate an Excel file.
Example filename:
Expense_Statement_October_2026.xlsx

The Excel file should contain:
Summary
Expense Statement
October 2026

Total Expenses: ₹12,850
Transactions: 47
Average: ₹273

Transaction table
Date	Store	Category	Payment	Amount	Description
08-10-2026	ABC Grocery	Grocery	Cash	₹500	Monthly groceries
09-10-2026	XYZ Restaurant	Food	Cash	₹180	Lunch


Total
TOTAL = ₹12,850

3.14 PDF Export
The application must generate a PDF monthly statement.
Example:
Expense_Statement_October_2026.pdf

PDF should contain:
- Application name
- Reporting month
- Total expense
- Number of transactions
- Average transaction
- Category summary
- Detailed transaction table
- Grand total
3.15 Share/Export
After generating Excel or PDF, the user should be able to use Android's share functionality.
Examples:
Share PDF
Share Excel
Save to device
Send through WhatsApp
Send through Email
Upload to Drive

The application itself does not need to implement WhatsApp/email integration; Android's native sharing mechanism can handle this.
3.16 Local Storage
The application must store all data locally on the user's device.
Recommended database:
SQLite
There must be no requirement for:
- Login
- Registration
- Cloud account
- Internet
- Remote server
3.17 Offline Requirement
The application must work without an internet connection.
All of these must work offline:
- Add transaction
- Edit transaction
- Delete transaction
- View transactions
- Search
- Filtering
- Dashboard
- Monthly reports
- Excel generation
- PDF generation
Internet must not be required.
4. NON-FUNCTIONAL REQUIREMENTS
4.1 Performance
The application should open quickly and provide responsive UI.
Database queries should be optimized for potentially thousands of transactions.
4.2 Usability
The interface must be:
- Simple
- Clean
- Modern
- Mobile friendly
- Easy to understand
- Minimal number of steps for adding expenses
The primary Add Transaction action should always be easy to access.
4.3 Reliability
Transactions must not disappear after:
- Closing the application
- Restarting the phone
- Restarting the application
Data must persist in SQLite.
4.4 Security
Transaction data should remain local to the device.
The application should not upload personal financial information to a server.