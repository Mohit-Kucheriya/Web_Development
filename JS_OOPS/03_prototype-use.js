// Object using constructor function
/*
1. properties and methods we define in constructor function gets copy into the object.
2. methods also get copied, so in both object same methods get copied, which violated the concept of DRY(don't repeat yourself).
3. So we will create methods and keep them in prototype. Hence prototype gets attached to object it not copied.
*/

function Person(firstN, lastN, age) {
    this.firstName = firstN;
    this.lastName = lastN;
    this.age = age;
}

Person.prototype.fullName = function () {
    return(`${this.firstName} ${this.lastName}`);
};

let p1 = new Person("Harry", "Potter", 25);
console.log(p1.fullName());

let p2 = new Person("Ron", "Wesley", 24);
console.log(p2);
