class BankAccount {
    constructor(accountHolderName, accountType) {
        this.accountHolderName = accountHolderName;
        this.accountType = accountType;
        this.balance = 0;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid deposit amount.");
        }

        this.balance += amount;
        return this.balance;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Invalid withdrawal amount.");
        }

        if (amount > this.balance) {
            throw new Error("Insufficient funds.");
        }

        this.balance -= amount;
        return this.balance;
    }

    checkBalance() {
        return this.balance;
    }
}

function handleUserAction(action) {
    const amountInput = document.getElementById("amount");
    const resultDisplay = document.getElementById("result");

    try {
        let message = "";

        switch (action) {
            case "deposit":
                const depositAmount = parseFloat(amountInput.value);
                if (isNaN(depositAmount)) {
                    throw new Error("Please enter a valid deposit amount.");
                }
                const depositedAmount = myAccount.deposit(depositAmount);
                message = `Deposited $${depositAmount}. New balance: $${depositedAmount}`;
                break;
            case "withdraw":
                let withdrawAmount = parseFloat(amountInput.value);
                if (isNaN(withdrawAmount)) {
                    withdrawAmount = parseFloat(prompt("Enter the withdrawal amount:"));
                    if (isNaN(withdrawAmount)) {
                        throw new Error("Invalid withdrawal amount.");
                    }
                }
                const withdrawnAmount = myAccount.withdraw(withdrawAmount);
                message = `Withdrawn $${withdrawnAmount}. New balance: $${myAccount.checkBalance()}`;
                break;
            case "balance":
                const currentBalance = myAccount.checkBalance();
                message = `Current balance: $${currentBalance}`;
                break;
            default:
                throw new Error("Invalid action.");
        }

        resultDisplay.textContent = message;
    } catch (error) {
        resultDisplay.textContent = `Error: ${error.message}`;
    } finally {
        if (action !== "balance") {
            amountInput.value = ""; // Clear the input field for deposit and withdrawal
        }
    }
}

const myAccount = new BankAccount("John Doe", "Savings");
