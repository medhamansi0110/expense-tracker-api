# Manual Test Cases

The following test cases were performed manually using Thunder Client to verify that each API endpoint is working as expected.

---

## 1. Check if the server is running

**Method:** GET

**Endpoint:** `/`

**Expected Result:**

- Status Code: 200 OK
- Response:

```
Expense Tracker API is Running!
```

---
## 2. Add Expenses

**Method:** POST

**Endpoint:** `/expenses`

**Request Body:**

```json
[
  {
    "title": "Pizza",
    "amount": 300,
    "category": "Food",
    "date": "2026-08-01"
  },
  {
    "title": "Movie Ticket",
    "amount": 500,
    "category": "Entertainment",
    "date": "2026-08-02"
  },
  {
    "title": "Coffee",
    "amount": 150,
    "category": "Food",
    "date": "2026-08-03"
  },
  {
    "title": "Electricity Bill",
    "amount": 1200,
    "category": "Utilities",
    "date": "2026-08-05"
  },
  {
    "title": "Bus Ticket",
    "amount": 100,
    "category": "Travel",
    "date": "2026-09-01"
  },
  {
    "title": "Notebook",
    "amount": 250,
    "category": "Education",
    "date": "2026-09-03"
  }
]
```

**Expected Result:**

- Status Code: **201 Created**
- Six expenses are added successfully.
- Each expense receives a unique ID starting from 1.

---

## 3. View All Expenses

**Method:** GET

**Endpoint:** `/expenses`

**Expected Result:**

- Returns all six expenses.
- Status Code: **200 OK**

---

## 4. Filter Expenses by Category

**Method:** GET

**Endpoint:**

```
/expenses?category=Food
```

**Expected Result:**

- Returns **2 expenses** (Pizza and Coffee).

---

## 5. Search Expenses (Bonus)

### Search by Title

**Method:** GET

**Endpoint:**

```
/expenses/search?keyword=coffee
```

**Expected Result:**

- Returns the **Coffee** expense.

### Search by Category

**Method:** GET

**Endpoint:**

```
/expenses/search?keyword=food
```

**Expected Result:**

- Returns **Pizza** and **Coffee**.

---

## 6. Calculate Total Expenses

**Method:** GET

**Endpoint:**

```
/expenses/total
```

**Expected Result:**

```json
{
    "category": "All",
    "total": 2500
}
```

---

## 7. Calculate Total by Category

**Method:** GET

**Endpoint:**

```
/expenses/total?category=Food
```

**Expected Result:**

```json
{
    "category": "Food",
    "total": 450
}
```

---

## 8. Monthly Summary (Bonus)

### August 2026

**Method:** GET

**Endpoint:**

```
/expenses/monthly-summary?month=08&year=2026
```

**Expected Result:**

- Number of Expenses: **4**
- Total Expenses: **2150**

### September 2026

**Method:** GET

**Endpoint:**

```
/expenses/monthly-summary?month=09&year=2026
```

**Expected Result:**

- Number of Expenses: **2**
- Total Expenses: **350**

---

## 9. Delete an Expense

**Method:** DELETE

**Endpoint:**

```
/expenses/2
```

**Expected Result:**

- Expense with ID **2** (Movie Ticket) is deleted successfully.

---

## 10. Verify Delete

**Method:** GET

**Endpoint:**

```
/expenses
```

**Expected Result:**

- Only **5 expenses** are returned.
- The deleted expense should not be present.

---

## 11. Delete an Invalid Expense

**Method:** DELETE

**Endpoint:**

```
/expenses/100
```

**Expected Result:**

- Status Code: **404 Not Found**
- Returns:

```json
{
    "message": "Expense not found."
}
```