# Bank Account Management Website

Welcome to the Bank Account Management website! This web application allows you to manage your bank account with ease. Below, you'll find instructions on how to use this site, along with an overview of how we've incorporated classes, switch statements, and try-catch-finally statements into the website's functionality.

## How to Use

1. **Deposit**: To make a deposit, enter the desired amount in the input field and click the "Deposit" button. Your new balance will be displayed.

2. **Withdraw**: To make a withdrawal, enter the desired amount in the input field and click the "Withdraw" button. If your account has sufficient funds, the withdrawal will be processed, and your new balance will be shown. Otherwise, an error message will appear.

3. **Check Balance**: Click the "Check Balance" button to view your current account balance. No additional input is required.

## Incorporating Key Concepts

### Classes

We've implemented a `BankAccount` class to encapsulate the properties and methods of a bank account. This class includes properties like `balance`, `accountHolderName`, and `accountType`, along with methods for `deposit`, `withdraw`, and `checkBalance`. The use of classes helps organize the code and improves maintainability.

### Switch Statements

We've employed switch statements in the `handleUserAction` function to determine the user's action (deposit, withdraw, or balance check). Depending on the action, the appropriate code block is executed. This ensures smooth and clear control flow.

### Try-Catch-Finally Statements

To handle potential errors, we've implemented try-catch-finally statements within the `handleUserAction` function. These statements catch errors such as invalid inputs, insufficient funds, or other exceptions. The catch block displays error messages, providing a user-friendly experience. The finally block ensures the input field is cleared after each action.

---

Thank you for using our Bank Account Management website. We hope this write-up and the website itself meet your expectations. If you have any questions or feedback, please don't hesitate to reach out. Enjoy managing your bank account effortlessly!
