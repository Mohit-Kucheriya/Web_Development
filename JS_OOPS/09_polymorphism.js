/* 
1. Polymorphism : To use a single interface to represent different types.
2. poly: poly means many.
3. morph: morph means shape.
*/
class Bird {
    fly() {
        return `Flying Bird`;
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguin can't fly`;
    }
}

let sparrow = new Bird();
let penguin = new Penguin();

console.log(sparrow.fly());
console.log(penguin.fly());

/* 
1. static method : method which belongs to class not object, cannot be called using object.
2. static method can be called using class name.
*/

class Calculator {
    static add(a, b) {
        return a + b;
    }
}

let addCal = new Calculator()
// console.log(addCal.add(10, 20)); // gives error because we can't call static method using object.

console.log(Calculator.add(10, 20)); // gives 30

