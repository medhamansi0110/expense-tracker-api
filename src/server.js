const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

let expenses = [];
let nextId = 1;

// =========================
// Home Route
// =========================
app.get("/", (req, res) => {
    res.send("Expense Tracker API is Running!");
});


// =========================
// Add Expense(s)
// =========================
app.post("/expenses", (req, res) => {

    const data = req.body;

    // Accept both single object and array
    const expensesToAdd = Array.isArray(data) ? data : [data];

    const addedExpenses = [];

    for (const expense of expensesToAdd) {

        if (!expense.title || !expense.amount || !expense.category || !expense.date) {
            return res.status(400).json({
                message: "All fields are required."
            });
        }

        const newExpense = {
            id: nextId++,
            title: expense.title,
            amount: expense.amount,
            category: expense.category,
            date: expense.date
        };

        expenses.push(newExpense);
        addedExpenses.push(newExpense);
    }

    res.status(201).json({
        message: `${addedExpenses.length} expense(s) added successfully.`,
        expenses: addedExpenses
    });

});


// =========================
// Search Expenses (Bonus)
// =========================
app.get("/expenses/search", (req, res) => {

    const keyword = req.query.keyword;

    if (!keyword) {
        return res.status(400).json({
            message: "Please provide a search keyword."
        });
    }

    const result = expenses.filter(expense =>

        expense.title.toLowerCase().includes(keyword.toLowerCase()) ||

        expense.category.toLowerCase().includes(keyword.toLowerCase())

    );

    res.json(result);

});


// =========================
// Monthly Summary (Bonus)
// =========================
app.get("/expenses/monthly-summary", (req, res) => {

    const { month, year } = req.query;

    if (!month || !year) {
        return res.status(400).json({
            message: "Please provide month and year."
        });
    }

    const monthlyExpenses = expenses.filter(expense => {

        const expenseDate = new Date(expense.date);

        const expenseMonth = String(expenseDate.getMonth() + 1).padStart(2, "0");
        const expenseYear = String(expenseDate.getFullYear());

        return expenseMonth === month && expenseYear === year;

    });

    const total = monthlyExpenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    res.json({
        month,
        year,
        numberOfExpenses: monthlyExpenses.length,
        totalExpenses: total,
        expenses: monthlyExpenses
    });

});


// =========================
// Total Expenses
// =========================
app.get("/expenses/total", (req, res) => {

    const category = req.query.category;

    let filteredExpenses = expenses;

    if (category) {

        filteredExpenses = expenses.filter(expense =>
            expense.category.toLowerCase() === category.toLowerCase()
        );

    }

    const total = filteredExpenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    res.json({
        category: category || "All",
        total
    });

});


// =========================
// View All / Filter by Category
// =========================
app.get("/expenses", (req, res) => {

    const category = req.query.category;

    if (!category) {
        return res.json(expenses);
    }

    const filteredExpenses = expenses.filter(expense =>
        expense.category.toLowerCase() === category.toLowerCase()
    );

    res.json(filteredExpenses);

});


// =========================
// Delete Expense
// =========================
app.delete("/expenses/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = expenses.findIndex(expense => expense.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Expense not found."
        });
    }

    const deletedExpense = expenses.splice(index, 1);

    res.json({
        message: "Expense deleted successfully.",
        deletedExpense
    });

});


// =========================
// Start Server
// =========================
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});