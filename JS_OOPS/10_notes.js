/*

1. Function Constructor:
In a functional constructor, you need to use this to attach properties and methods to the object being created. Here's a summary:

- Properties and methods must be attached using this.
- Methods are usually defined inside the constructor function.

*/

function Person(name, age) {
    this.name = name;
    this.age = age;

    // Method using 'this'
    this.greet = function () {
        return `Hello, my name is ${this.name}`;
    };
}

const person1 = new Person("John", 30);
console.log(person1.greet()); // Output: "Hello, my name is John"

/*
 Class Constructor:
In ES6 class syntax, methods are defined directly inside the class body, and you don't need to use this when defining the method. However, for properties inside the constructor, you still use this.

- Properties are still assigned using this inside the constructor.
- Methods are declared directly inside the class body and are automatically added to the prototype, so all instances share the method.
*/

class Person {
    constructor(name, age) {
        this.name = name; // Properties
        this.age = age;
    }

    // Direct method declaration
    greet() {
        return `Hello, my name is ${this.name}`;
    }
}

const person2 = new Person("John", 30);
console.log(person2.greet()); // Output: "Hello, my name is John"

/*
Key Differences:
Method Declaration:

1. In function constructors, methods are attached directly using this.
2. In class syntax, methods are declared inside the class body, outside the constructor, and they automatically go to the class's prototype.
Prototype Efficiency:

1. In function constructors, if you define methods using this, each instance will have its own copy of the method.
2. In class syntax, methods are added to the prototype, so all instances share the same method (which is more memory-efficient).
*/
