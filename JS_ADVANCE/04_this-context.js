// this keyword : It is used to refer to the object that the function is called on.
/*
Difference between call and apply,bind
call: It is used to call a function with a specific context.
apply: It is used to call a function with a specific context and pass the arguments.
bind : It is used to bind a function to a specific context.

*/

// Using bind method
let person = {
    name: "Salaar",
    greet() {
        return `Heeey ${this.name} how are you?`;
    },
};
console.log(person.greet());

let person2 = person.greet; // here we are passing only the reference of greet function.
console.log(person2());

let person3 = person.greet.bind(person);
console.log(person3());


