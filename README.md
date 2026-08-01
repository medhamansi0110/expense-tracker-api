# Expense Tracker REST API

A simple REST API built using **Node.js** and **Express.js** to manage personal expenses. The application supports adding, viewing, filtering, searching, calculating totals, generating monthly summaries, and deleting expenses. Data is stored in memory, so no database setup is required.

---

## Features

- Add one or multiple expenses
- View all expenses
- Filter expenses by category
- Search expenses by title or category
- Calculate total expenses
- Calculate category-wise total expenses
- Generate monthly summary
- Delete an expense
- Input validation for required fields

---

## Tech Stack

- Node.js
- Express.js

---

## Project Structure

```
expense-tracker-api/
│
├── src/
│   └── server.js
│
├── tests/
│   └── TESTS.md
│
├── README.md
├── AI_NOTES.md
├── package.json
└── node_modules/
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project directory

```bash
cd expense-tracker-api
```

Install dependencies

```bash
npm install
```

---

## Running the Server

```bash
npm start
```

The server runs on:

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Check server |
| POST | `/expenses` | Add one or multiple expenses |
| GET | `/expenses` | View all expenses |
| GET | `/expenses?category=Food` | Filter by category |
| GET | `/expenses/search?keyword=food` | Search expenses |
| GET | `/expenses/total` | Total expenses |
| GET | `/expenses/total?category=Food` | Category total |
| GET | `/expenses/monthly-summary?month=08&year=2026` | Monthly summary |
| DELETE | `/expenses/:id` | Delete expense |

---

## Testing

Manual test cases for all endpoints are available in:

```
tests/TESTS.md
```

All endpoints were tested using Thunder Client.

---

## Notes

- Data is stored in memory.
- Restarting the server clears all stored expenses.
- No database setup is required.