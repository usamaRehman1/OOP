// ------------ Polymorphism ------------------
// poly means many and morphism means transforming one form into another.
// Polymorphism means the same function with different signatures is called many times.
// It allows methods to do different things based on the object it is acting upon.

// In JavaScript, polymorphism works in two primary ways:

// Method Overriding: A child class overrides a method of its parent class.
class Animal {
    makeSound() {
        console.log("Some generic sound")
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog is barking 🐶");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Cat is meowing 🐱");
    }
}

new Animal().makeSound(); // Some generic sound
new Dog().makeSound(); // Dog is barking 🐶
new Cat().makeSound(); // Cat is meowing 🐱

// Method Overloading (simulated): A function behaves differently based on the number or type of its arguments.

class Calculator {
    add(a, b, c) {
        if (c !== undefined) {
            return a + b + c
        }
        return a + b
    }
}

const addNum = new Calculator();
console.log(addNum.add(2, 3)) // 5
console.log(addNum.add(2, 3, 5)) // 10