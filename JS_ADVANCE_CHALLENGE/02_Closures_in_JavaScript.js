// /*
// Task 1: Creating a Counter Using Closures

// Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.
// */

// function createCounter() {
//     let counter = 0;
//     return function () {
//         counter++;
//         return counter;
//     };
// }

// let storeCounter = createCounter();
// console.log(storeCounter());

// /*
// Task 2: Rate Limiter Function

// Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".
// */

// function rateLimiter(fn, limit) {
//     let lastCalled = 0;
//     return function (...args) {
//         let now = Date.now();
//         console.log(now - lastCalled);
//         if (now - lastCalled < limit) {
//             return `Rate limit exceeded`;
//         } else {
//             lastCalled = now;
//             return fn(...args);
//         }
//     };
// }

// function exampleRate(message) {
//     return message;
// }

// let storeRateLimiter = rateLimiter(exampleRate, 1000);
// console.log(storeRateLimiter("Hello"));

/*
Task 3: Memoization Function

Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again.
*/
let sum = 0;
let calc = (n) => {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
};

let memoize = (fn) => {
    let cache = {};
    return function (...args) {
        let n = args[0];
        if (cache[n]) {
            // Here we are checking if chache object has the value of n
            console.log(`From cache ${n}`);
            console.log(cache);
            return cache[n];
        } else {
            console.log(`Calculating for the first time ${n}`);

            let result = fn(n);
            cache[n] = result;
            return result;
        }
    };
};

let memoizedSum = memoize(calc);
console.log(memoizedSum(10));
console.log(memoizedSum(10));

