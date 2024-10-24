// Memoization
/*
Implementation of memoization in JavaScript.
1. Memoization is an optimazation technique that can be used to reduce time-consuming calculation by saving previous inputs to something called a cache and returning the resulr from it.
 */
let sum = 0;
let calc = (n) => {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
};

const memoize = (fn) => {
    let cache = {};
    return function (...args) {
        let n = args[0]; // Getting the first argument
        if (n in cache) { // Checking if the value is in the cache
            console.log(`From cache ${n}`);
            console.log(cache);
            return cache[n]; // Returning the value from the cache
        } else {
            console.log(`Calculating for first time `);
            let result = fn(n);  // Calling the calculation function
            cache[n] = result; // Storing the result in the cache
            return result;
        }
    };
};

console.time()
const memoizedSum = memoize(calc);
console.log(memoizedSum(10));
console.timeEnd()

console.time()
console.log(memoizedSum(10));
console.timeEnd()





