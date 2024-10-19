/* 1. If we have to create a object 'new' keyword is used.
   2. To access the any variable, we have to understand the context of function.
   3. Always remember new keyword is used to create a new object i.e it create a new instance of object.
   4. The newly created object gets attached to the context of function and this keyword refers to that object, so we can access its properties.
*/

function Car(make, model) {
    this.make = make;
    this.model = model;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let myCar = new Car("Honda", "Accord");
console.log(myCar);

function teaType(type) {
    this.type = type;
    this.description = function () {
        return `I am drinking ${this.type} tea.`;
    };
}

let newTea = new teaType("green");
console.log(newTea.description());

function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
}

Animal.prototype.makeSound = function () {
    return `I am ${this.species} and I ${this.sound}.`;
};

let dog = new Animal("dog", "bark");
console.log(dog);
console.log(dog.makeSound());

/*
    With new: new.target logs the function 'checkNew'.
    Without new: new.target logs 'undefined', and the error is triggered.


    When the ! operator is applied:
    
    If new.target is truthy (i.e., the function was called with new), the ! operator negates it to false. The code inside the if block will not execute.

    If new.target is falsy (i.e., undefined when called without new), the ! operator negates it to true. The condition will pass, and the error will be thrown.
*/

function checkNew(check) {
    console.log(new.target);

    if (!new.target) {
        throw new Error("It must be called with 'new' keyword");
    }
    this.check = check;
}

let checkTogether = new checkNew("together");
console.log(checkTogether);
