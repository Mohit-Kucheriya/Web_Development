/*

Data-Types
1. String
2. Number
3. Boolean
4. Undefined
5. null 
6. BigInt
7. Symbol
8. Objects

*/

// Here we have only stored the memory for the variables and assign the values to them
let score = 102;
let firstName = "Mohit";
let isLoggedIn = false;

// Objects
let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let weekEnd = {
    first: "Saturday",
    second: "Sunday",
};

// To display it we have to explicitly say i.e. console.log()
console.log(score);
console.log(firstName);
console.log(isLoggedIn);
console.log(weekDays);
console.log(weekEnd);

// Using another variable called const, its also used to stored the values, but re-assign to constant is not allowed

const setUsername = "mohit-kucheriya@123";
console.log(setUsername);

setUsername = "kucheriya-mohit@123" // this is will lead us to the error called the TypeError: Assignment to constant variable

