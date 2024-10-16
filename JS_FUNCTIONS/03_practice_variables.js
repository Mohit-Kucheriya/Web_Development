// **** DO NOT CHANGE the values *****

/*
Perform the following mathematical operations
on the provided variables a and b

1. Add

2. Subtract

3. Multiply

4. Divide

5. Increment

6. Decrement

7. Reminder

*/

const a = 18;
const b = 24;

// Addition of two values
function add() {
    const result = a + b;
    return result;
}
console.log(add());

// Subtract small value from larger one
function subtract() {
    const result = b - a;
    return result;
}
console.log(subtract());

function multiply() {
    const result = a * b;
    return result;
}
console.log(multiply());

// Divide larger value by small
function divide() {
    const result = b / a;
    return result;
}
console.log(divide());

// Increase value of a by 1
function increment() {
    let result = a;
    result += 1;
    return result;
}
console.log(increment());

// Decrease value of b by 1
function decrement() {
    let result = b;
    result -= 1;
    return result;
}
console.log(decrement());

// Divide larger value by small to find the reminder
function reminder() {
    const result = b % a;

    return result;
}
console.log(reminder());
