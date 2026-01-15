// ------------------------ Abstraction ---------------------------
// It means showing only the essential information and hiding unnecessary details from the user.

// Vehicle Abstraction
// User only interacts with start and drive
// Engine and internal functionality is hidden

class Vehicle {
    constructor() {
        this.ignition();
        this.readyToDrive()
    }

    ignition() {
        console.log("Start Vehicle")
    }

    readyToDrive() {
        console.log("Ready To Drive")
    }
}

const car = new Vehicle();
car.ignition()
car.readyToDrive()

// User login using Abstraction
// step 1 => craete new User with Password
// step 2 => Call login method with argument password
// step 3 => if - password correct => else - incorrect password

class User {
    #password;
    constructor(newPassword) {
        this.#password = newPassword
    }

    login(checkPass) {

        if (this.#password == checkPass) {
            console.log("user Login Successfully")
        } else {
            console.log("password is not correct")
        }
    }
}
const firstUser = new User(12345)
firstUser.login(12345) // user Login Successfully