/*
Task 1:
Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
*/

function stringToNumber(input) {
    let num = Number(input);
    if (isNaN(num)) { // here isNaN is a function that checks if the value is not a number
        return `Not a number`;
    }
    return num
}

console.log(stringToNumber("14"));


/*
Task 2:
Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
*/

function flipBoolean(input) {
    let flip = Boolean(input) // here we are converting the input to boolean 
    let flipValue = !flip // here we are reversing the boolean value i.e true to false and vice versa
    return flipValue;
}

console.log(flipBoolean(0))


/*
Task 3:
Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
*/

function whatAmI(input) {
    let numConversion = Number(input)
    if (!isNaN(numConversion)) {
        return `I'm a number`
    }

    if (typeof input === 'string') {
        return `I'm a string`
    }

}
console.log(whatAmI("Mohit"))

/*
Task 4:
Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
*/

function isItTruthy(input) {
    if (input) {
        return `It's truthy!`
    }
    else {
        return `It's falsey!`
    }

}
console.log(isItTruthy(""))