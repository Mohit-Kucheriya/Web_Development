let car = {
    make: "Honda",
    model: "Accord",
    year: 2020,
    detail: function () {
        return `I am ${this.make} ${this.model} and I am ${this.year} year model.`;
    },
};
console.log(car.detail());

function Person(name, age) {
    this.name = name;
    this.age = age;
}
let newPerson1 = new Person("Dumbeldoor", 25);
console.log(newPerson1);

function Animal(type) {
    this.type = type;
}

Animal.prototype.characteristics = function () {
    return `I am ${this.type}.`;
};

let newDog = new Animal("husky");
console.log(newDog.characteristics());


Array.prototype.customMethod = function () {
    return ` ${this} in the array there are ${this.length} elements.`; // here this refers to the array
}

let arr = [1, 2, 3, 4, 5];
console.log(arr.customMethod());

let newArray = ["Mohit", "Kucheriya"]
console.log(newArray);
console.log(newArray.customMethod());

