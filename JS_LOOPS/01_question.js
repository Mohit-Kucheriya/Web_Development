/* 
    guidelines for loops: 
 1. initialization : starting point
 2. condition : ending point
 3. increment/decrement : step
 4. code : what to do
 */

// Q1 : write a while loop that calculates the sum of numbers from 1 to 5 and stores the result in a variable named sum.
let i = 1; // initialization: starting point
let sum = 0;
while (i <= 5) {
    // condition: ending point
    sum = sum + i; // here we are adding the value of i to the sum and storing it in the sum variable
    i++; // here we are incrementing the value of i by 1
}
console.log(sum);

// Q2 : Write a while loop that counts down from 10 to 1 and stores the numbers in an array named countDown.
let j = 5;
let countDown = [];

while (j >= 1) {
    countDown.push(j); // here we are adding the value of j to the countDown array
    j--; // here we are decrementing the value of j by 1
}
console.log(countDown);

//  same result without using push method
let k = 5;
let countDown2 = [];

while (k >= 1) {
    countDown2[countDown2.length] = k; // here [countDown2.length] is the index of the array and we are assigning the value of k on that index
    k--;
}
console.log(countDown2);