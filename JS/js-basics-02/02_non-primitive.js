/*

Objects are non-primitive but the properties inside it are primitive, they can be mutate.
Here we are not changing the memory references, it's still the same memory reference

*/

const username = {
    firstName: "Harry",
    lastName: "Potter",
};
console.log(username);

console.log(typeof username);

console.log(username.firstName);

username.firstName = "Hermoine";

console.log(username.firstName);

// Another way to access the object
const anotherUsername = {
    "first Name ": "Ron",
    "last Name": "Wesely",
};
// Now to access the key written in "" we can use [" "] i.e 
console.log(anotherUsername["first Name "]);

// Array
let heroes = ["spiderman", "batman", "superman"];
console.log(heroes);


let isSignedIn = true
console.log(typeof isSignedIn);
console.log(typeof Number(isSignedIn));

console.log("1" + 1)
console.log(1 + "1")
console.log(1 - 1 + "1")


