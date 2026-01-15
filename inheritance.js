// ------------------------------- Inheritance -------------------
// Inheritance is a fundamental concept in object-oriented programming (OOP) that allows one class
// or object to derive properties and behaviours from another.

class Person {
    constructor(user_name, city) {
        this.user_name = user_name
        this.city = city
    }

    greet() {
        console.log("welcome " + this.user_name)
    }
}
// This method manually is shared by all Person objects
Person.prototype.introduction = function (city = "karachi") {
    console.log(`Hi i am  ${this.user_name} from ${this.city || city}`);
}

const people = new Person("usama");
people.introduction("Karachi")
people.greet()

// Teacher blueprint from Person blueprint
class Teacher extends Person {
    constructor(user_name, subject, city) {
        super(user_name, city) // call parent class
        this.subject = subject
    }

    teaching() {
        console.log(`${this.user_name} teaching ${this.subject}`)
    }
}

const phyTeacher = new Teacher("usama", "physics")
console.log(phyTeacher)
phyTeacher.teaching() // usama teaching physics
phyTeacher.introduction() // Hi i am  usama from karachi
phyTeacher.greet() // welcome usama

const comTeacher = new Teacher("Talha", "Computer", "lahore")
console.log(comTeacher)
comTeacher.teaching() // Talha teaching Computer
comTeacher.introduction() // Hi i am  Talha from lahore
comTeacher.greet() // welcome Talha

// Student blueprint from Person blueprint
class Student extends Person {
    constructor(user_name, _class, city) {
        super(user_name, city) // call parent constructor
        this._class = _class
    }

    studing() {
        console.log(`${this.user_name} is studing in ${this._class} class.`)
    }
}

const std = new Student("irtiza", 10)
console.log(std)
std.studing() // irtiza is studing in 10 class.
std.introduction("Islamabad") // Hi i am  irtiza from Islamabad
std.greet() // welcome irtiza