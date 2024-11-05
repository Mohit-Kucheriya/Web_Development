document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById("expense-form");
    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput = document.getElementById("expense-amount");
    const expenseListDisplay = document.getElementById("expense-list");
    const totalAmountDisplay = document.getElementById("total-amount");

    let expenses = JSON.parse(localStorage.getItem("expenses")) || []; // Getting the expenses from localStorage or an empty array if nothing is stored.
    let totalAmount =
        parseFloat(localStorage.getItem("totalAmount")) || calculateTotalAmount();

    renderExpenses();
    displayTotal();

    expenseForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = expenseNameInput.value.trim(); // Getting the name of the expense and trimming the whitespaces
        const amount = parseFloat(expenseAmountInput.value.trim()); // Getting the amount of the expense and trimming the whitespaces

        if (name !== "" && !isNaN(amount) && amount > 0) {
            // Checking if the name is not empty and the amount is a number and is greater than 0

            let newExpensesObj = {
                id: Date.now(),
                name: name,
                amount: amount,
            };
            expenses.push(newExpensesObj); // Adding the new expense to the expenses array
            saveExpensesToLocalStorage();
            renderExpenses();
            updateTotal();
            // To clear NameInput & AmountInput
            expenseNameInput.value = "";
            expenseAmountInput.value = "";
        }
    });

    function calculateTotalAmount() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }

    // Function to save the expenses to localStorage
    function saveExpensesToLocalStorage() {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    function renderExpenses() {
        expenseListDisplay.innerHTML = "";
        expenses.forEach((expense) => {
            const li = document.createElement("li");
            li.innerHTML = `
            ${expense.name} - $${expense.amount.toFixed(2)}
            <button data-id="${expense.id}">Delete</button>
            `;
            expenseListDisplay.appendChild(li);
        });
    }

    function updateTotal() {
        totalAmount = calculateTotalAmount();
        localStorage.setItem("totalAmount", totalAmount); // To save the totalAmount to the localStorage
        displayTotal();
    }

    function displayTotal() {
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }

    expenseListDisplay.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const expenseId = parseInt(e.target.getAttribute("data-id"));
            expenses = expenses.filter((expense) => expense.id !== expenseId);

            saveExpensesToLocalStorage();
            renderExpenses();
            updateTotal();
        }
    });
});
