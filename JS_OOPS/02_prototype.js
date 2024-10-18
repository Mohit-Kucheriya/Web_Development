/*
1. Prototype : means extra properties and functionality in any given data type.
2. Whenver we create an object, javaScript attach a property to it called prototype.
3. JS gives a by default function called hasOwnProperty(). Its work is to check whether a object has a particular property. If it does, it returns true, else false.
*/

let person1 = {}
console.log(person1);

let person2 = {
    name: "Mohit Kucheriya"
}
console.log(person2);
console.log(person2.hasOwnProperty("name"));
console.log(person2.hasOwnProperty("age"));

// Using constructor function
/*
1. When we create a object using constructor function it create its own Prototype called(Person(n)) according to the name of function and in that prototype we have inbuit javaScript prototype i.e (object) which has further default functions like hasOwnProperty().
2. In simple way function Prototype get attached to object Prototype
*/
function Person(n) {
    this.name = n;
}

let newPerson1 = new Person("Harry")
console.log(newPerson1);
console.log(newPerson1.hasOwnProperty("age"));



