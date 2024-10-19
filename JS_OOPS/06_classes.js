class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    detail() {
        return `I'm ${this.model} model and I'm ${this.make} brand.`;
    }
}

class Car extends Vehicle {
    carDetails() {
        return `I'm ${this.make} brand: Example of Inheritance.`;
    }
}


let newCar1 = new Car("BMW", "X5");
console.log(newCar1.carDetails());
console.log(newCar1.detail());
