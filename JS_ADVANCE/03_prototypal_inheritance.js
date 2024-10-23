function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    return `Hello my name is ${this.name}`;
};

let newPerson = new Person("Mohit");
console.log(newPerson.greet());
