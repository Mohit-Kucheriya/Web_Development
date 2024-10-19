// Encapsulation : To restrict the direct access to the properties and methods of an object.

class BankAccount {
    #balance = 0; // by using # we make the variable private, we can acces only from inside the class.

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance() {
        return `$ ${this.#balance}`
    }

}
let account = new BankAccount()
account.deposit(100);
console.log(account.getBalance());
