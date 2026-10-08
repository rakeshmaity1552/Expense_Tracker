9. DFD — DATA FLOW DIAGRAM
9.1 Context Level — Level 0
                  ┌──────────────────┐
                  │       USER       │
                  └────────┬─────────┘
                           │
                 Transaction Data
                           │
                           ▼
              ┌─────────────────────────┐
              │                         │
              │    EXPENSE TRACKER      │
              │       APPLICATION       │
              │                         │
              └───────────┬─────────────┘
                          │
                Reports / Results
                          │
                          ▼
                  ┌──────────────────┐
                  │       USER       │
                  └──────────────────┘
10. DFD LEVEL 1
                     USER
                       │
                       │ Transaction
                       ▼
              ┌──────────────────┐
              │ 1.0 Manage       │
              │ Transactions     │
              └────────┬─────────┘
                       │
                       ▼
              ┌──────────────────┐
              │ D1: SQLite       │
              │ Database         │
              └────────┬─────────┘
                       │
                       ▼
              ┌──────────────────┐
              │ 2.0 Search &     │
              │ Filter           │
              └────────┬─────────┘
                       │
                       ▼
                     USER


                     USER
                       │
                       ▼
              ┌──────────────────┐
              │ 3.0 Generate     │
              │ Monthly Report   │
              └────────┬─────────┘
                       │
                       ▼
              ┌──────────────────┐
              │ 4.0 Export       │
              │ Excel / PDF      │
              └────────┬─────────┘
                       │
                       ▼
                     USER
11. DFD LEVEL 2 — TRANSACTION PROCESS
USER
 │
 │ Enter transaction
 ▼
┌───────────────────┐
│ Validate Input    │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Create Transaction│
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ SQLite Database   │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Display Success   │
└─────────┬─────────┘
          │
          ▼
        USER
12. DFD LEVEL 2 — SEARCH/FILTER
USER
 │
 │ Search / Filter
 ▼
┌─────────────────────┐
│ Search & Filter     │
│ Engine              │
└──────────┬──────────┘
           │
           │ Query
           ▼
┌─────────────────────┐
│ SQLite Database     │
└──────────┬──────────┘
           │
           │ Matching Records
           ▼
┌─────────────────────┐
│ Transaction Results │
└──────────┬──────────┘
           │
           ▼
          USER
13. DFD LEVEL 2 — REPORT GENERATION
                 USER
                   │
                   │ Select Month
                   ▼
          ┌─────────────────┐
          │ Report Manager  │
          └────────┬────────┘
                   │
                   ▼
          ┌─────────────────┐
          │ SQLite Database │
          └────────┬────────┘
                   │
             Transactions
                   │
                   ▼
          ┌─────────────────┐
          │ Calculate       │
          │ Statistics      │
          └────────┬────────┘
                   │
          ┌────────┴────────┐
          ▼                 ▼
 ┌────────────────┐  ┌────────────────┐
 │ Excel Generator│  │ PDF Generator  │
 └───────┬────────┘  └───────┬────────┘
         │                   │
         ▼                   ▼
      .XLSX                 .PDF
         │                   │
         └─────────┬─────────┘
                   ▼
                  USER
