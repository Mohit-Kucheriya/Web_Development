// Q1 : Write a function named 'makeTea' that takes a parameter 'typeOfTea' and returns a string like 'Making green tea' when called with 'green tea'. Store the result in a varaible named 'teaOrder'.

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("green tea");
console.log(teaOrder);

// Q2 : Create a function named 'orderTea' that takes one parameter, 'teaType'. Inside this function, create another function named 'confirmOrder' that returns a message like 'Order confirmed for chai'. Call 'confirmOrder' from within 'orderTea' and return  the result.

function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for chai`; // here we are returning the message
    }
    return confirmOrder(); // here we are calling the function and returning the result.
}
let getOrder = orderTea("chai");
console.log(getOrder);

// Q3 : Write a arrow function named 'calutaleTotal' that takes two parameters, 'price' and 'quantity'. The function should return the total cost by multiplying the 'price' and 'quantity'. Store the result in a varaible named 'totalCost'.

/* 
1. When using arrow function if we have only one parameter then we don't need to use parenthesis.
2. if we have only one satement then we don't need to use curly braces and return keyword called as implicit return.
3. if we have more than one statement then we need to use curly braces and return keyword.

*/

let calutaleTotal = (price, quantity) => {
    return price * quantity;
};

let totalCost = calutaleTotal(10, 5);
console.log(totalCost);

// Q4 : Write a function named 'processTeaOrder' that takes another function 'makeTea' as parameter and calls it with the argument 'earl grey'. Return  the result of calling 'makeTea'

function processTeaOrder(teaFn) {
    return teaFn("earl grey");  // here we are calling makeTea function with argument 'earl grey' and returning the result.
}

function makeTea(typeOfTea) {
    return `makeTea : ${typeOfTea}`;
}

let order = processTeaOrder(makeTea);
console.log(order);

// Q5 : Write a function 'createTeaMaker' that returns another function. The returned function should take one parameter 'teaType' and return a string like 'Making green tea'. Store the returned function  in a varaible named 'teaMaker' and call it with 'green tea'.

function createTeaMaker() {
    return function (teaType) {
        return `Making ${teaType}`
    }
}

let teaMaker = createTeaMaker()
console.log(teaMaker("green tea"));
