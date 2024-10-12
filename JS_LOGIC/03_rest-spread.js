// Spread Operator: The spread operator is used to expand an array into its individual elements.

// Spread Operator
let numbers = [1, 2, 3, 4, 5];
let newNumbers = [...numbers, 6, 7, 8, 9, 10];
console.log(newNumbers);

// Rest Parameter : The rest parameter is used to collect multiple arguments into a single array.
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
