// ---------------------- Encapsulation ----------------------------
// Encapsulation is a fundamental concept in object-oriented programming that refers to the practice
// of hiding the internal details of an object and exposing only the necessary information to the
// outside world.

// Bank Account
// You see: Balance, Withdraw, Deposit
// You don’t see: Bank server logic, verification, security

class Account {
    #initialBalance;
    constructor(initialBalance) {
        this.#initialBalance = initialBalance;
    }

    checkBalance() {
        return this.#initialBalance
    }

    deposite(amount) {
        return this.#initialBalance += amount
    }

    withDraw(amount) {
        return this.#initialBalance -= amount
    }
}

const myAcc = new Account(500)
console.log(myAcc)
console.log(myAcc.checkBalance()) // 500
console.log(myAcc.deposite(500)) // 1000
console.log(myAcc.checkBalance()) // 1000