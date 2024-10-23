/*

Promise : is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

1. Promise takes a callback function, which actually takes two parameters, resolve and reject.
2. resolve is for successful execution and reject is for error execution.
3. whatever value is passed to resolve or reject is the value returned by the promise.
4. And .then() is used to consume the promise, and .catch() is used to handle the error.
5. and the data we passed to resolve or reject get accessible in .then() and .catch().

Promises are consumed in two phases:
1. The promise creation phase.
2. The promise consumption phase.

*/

// 1st phase : Promise Creation Phase
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data Fetched Successfully");
            } else {
                reject("Error Occurred");
            }
        }, 3000);
    });
}

// 2nd phase: Promise Consumption Phase
fetchData()
    .then((data) => {
        console.log(data);
        return data.toUpperCase() // Whatever data is return from .then is accessible to next .then()
    })
    .then((value) => {
        console.log(value); 
    })
    .catch((error) => {
        console.log(error);

    })


