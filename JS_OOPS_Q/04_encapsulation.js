/*
Task 1: Encapsulation Using Getters and Setters

Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.
*/

class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance > 0 ? balance : 0;
    }

    get balance() {
        return this.#balance;
    }

    set balance(newBalance) {
        if (newBalance > 0) {
            this.#balance = newBalance;
        } else {
            console.log(`Balance cannot be negative`);
        }
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited ${amount} and balance is ${this.#balance}`);
            return this.#balance;

        } else {
            console.log(`Amount cannot be negative`);
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (this.#balance >= amount) {
                this.#balance -= amount;
                console.log(`Withdrawn ${amount} and balance is ${this.#balance}`);
                return this.#balance;
            } else {
                console.log(`Insufficient balance`);
            }
        }
    }
}

let account = new BankAccount(100);
console.log(account.balance);
console.log(account.deposit(100));




