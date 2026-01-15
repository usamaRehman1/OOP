// ---------------- Object Oriented Programming in JavaScript ------------------
// Object Oriented Programming (OOP) is a style of programming that uses classes and objects to model real-world things like data and behavior.

// -------------------- Objects -----------------------------------
// Object is a collection of data (properties) and actions (methods) storeas key–value pairs.

// Properties =>  hold values like strings, numbers, or even other objects.
// Methods => are functions inside the object that define what it can do.

// -------------------------- Classes ------------------------------
// A class is a blueprint for creating objects with specific properties and methods.
// A class itself doesn’t hold values, it describes what an object should have and do. You create
// actual objects from a class using the new keyword.

class Car {
    constructor(brand, modal) {
        this.brand = brand // Property
        this.modal = modal // Property
    }

    // method
    showDetaild() {
        console.log(`This Car is a ${this.brand} ${this.modal}`)
    }
}

// ------------------ new keyword do ----------------
// 1 => Creates a new empty object        ===> {}
// 2 => Links object to prototype         ===> Car.prototype
// 3 => this points to the new object     ===> this.key = value (property)
// 4 => Returns the object automatically  ===> You don’t need to return anything manually.

// Instance = Actual object made from that blueprint
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

console.log("car1 =>", car1)
car1.showDetaild()
console.log("car2 =>", car2)
car2.showDetaild()

const car3 = Car("BMW", "M3") // TypeError: Class constructor Car cannot be invoked without 'new'

// ----------------------- Hoisting -------------------------------------
// JavaScript classes are not hoisted. They behave like let and const and remain in the Temporal Dead Zone until declared.

new User("rehman", 27) //  ReferenceError: Cannot access 'User' before initialization
new User("usama", 28) // Dosen't work

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greeting() {
        console.log(`Welcome ${this.name}`)
    }
}
new User("usama", 28) // work

// -------------------------- classes in strict mode ---------------------
// YES — Classes are always in strict mode by default
// You do NOT need to write "use strict" inside a class.

class A {
    // Duplicate parameter names are not allowed in strict mode
    constructor(a, a) {
        this.a = a // SyntaxError: Duplicate parameter name not allowed in this context
        // Using undeclared variables without var, let and const
        x = 5 //  ReferenceError: x is not defined
        console.log(this) // {}
    }

    showThis() {
        console.log(this) // {}
    }
}

console.log(new A())
console.log(new A().showThis()) // undefined