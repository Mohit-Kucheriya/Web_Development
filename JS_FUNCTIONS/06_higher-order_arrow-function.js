/*
Task 1: Using Array Methods
Write a function squareNumbers(arr) using map() and arrow functions
*/
let arr = [1, 2, 3, 4, 5];
const squareNumbers = (arr) => {
    let newArr = arr.map((elem) => elem * elem);
    console.log(newArr);
};

squareNumbers(arr);
