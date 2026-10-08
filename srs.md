5.1 Functional Requirements
FR-01 — Add Transaction
The system shall allow users to add a transaction.
FR-02 — Amount
The system shall accept a positive monetary amount.
FR-03 — Store/Paid To
The system shall store the store or recipient name.
FR-04 — Category
The system shall associate a category with each transaction.
FR-05 — Date
The system shall store the transaction date.
FR-06 — Payment Method
The system shall store payment method, with Cash as the default.
FR-07 — Description
The system shall allow an optional description.
FR-08 — Database
The system shall save transactions in a local SQLite database.
FR-09 — Transaction History
The system shall display stored transactions.
FR-10 — Search
The system shall allow searching by store/recipient and description.
FR-11 — Date Filtering
The system shall support date-based filtering.
FR-12 — Store Filtering
The system shall support store-name filtering.
FR-13 — Amount Filtering
The system shall support exact, minimum, maximum, and range filtering.
FR-14 — Category Filtering
The system shall support category filtering.
FR-15 — Combined Filtering
The system shall support multiple filters simultaneously.
FR-16 — Sorting
The system shall support transaction sorting.
FR-17 — View Details
The system shall display complete transaction information.
FR-18 — Edit
The system shall allow transaction modification.
FR-19 — Delete
The system shall allow transaction deletion after confirmation.
FR-20 — Dashboard
The system shall calculate and display expense statistics.
FR-21 — Monthly Reports
The system shall generate monthly expense summaries.
FR-22 — Excel Export
The system shall generate .xlsx reports.
FR-23 — PDF Export
The system shall generate .pdf reports.
FR-24 — Sharing
The system shall allow exported files to be shared using Android's native share functionality.
FR-25 — Offline Operation
The system shall operate without internet connectivity.
6. DATA VALIDATION
The application must validate:
Amount
- Required
- Must be numeric
- Must be greater than 0
Invalid:
₹0
-₹100
ABC

Store
- Required
- Cannot be empty
Category
- Required
Date
- Required
- Valid date
Description
- Optional