/* Primitive types

 1. String
 2. Number
 3. Boolean
 4. null 
 5. undefined
 6. Symbol

*/
// NOTE: Every single primitive can also be converted into advanced data types or the object type or the non-primitive type. In JS evrything is an object.

// Number
let balance = 120;
console.log(typeof balance); // here the type is number

let newBalance = new Number(450); // not recommended way
console.log(newBalance);
console.log(newBalance.valueOf());
console.log(typeof newBalance); // here the type is object

// null & undefined

/*

undefined: undefined means that a variable has been declared, but it hasn't been assigned a value yet. JavaScript automatically assigns undefined to variables when they are declared but not initialized.

It indicates that memory has been reserved for that variable, but no specific value has been stored in that memory.
undefined is different from other values like 0 or null. While 0 is a number and null represents an explicitly empty or non-existent value, undefined signifies that a variable hasn't been given any value yet.

*/
let getBalance;
console.log(getBalance); // here it will log undefined

/*

null : Expicitly assign null means empty, neither Zero, neither undefined
Always remember null is not considered as '0' value, as '0' is itself a number.

*/
let getNumber = null;
console.log(getNumber); // here it will log null, because we have explicitly assign null to it.

// String
let myString = "Mohit";
let newString = "Kucheriya";

console.log(myString + " " + newString);

// Another way is String interpolation
let anotherString = `Hello ${myString} ${newString}`;
console.log(anotherString);

// Symbol: Generates a unique value & always returns a symbol
