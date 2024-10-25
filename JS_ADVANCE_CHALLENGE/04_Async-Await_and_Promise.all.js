/*
Task 1: Async-Await with Promise.all

Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second.
Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()
*/

function fetchUser() {
    return new Promise((resolve) =>
        setTimeout(function () {
            resolve(`User data`);
        }, 1000)
    );
}

function fetchPosts() {
    return new Promise((resolve) =>
        setTimeout(function () {
            resolve(`Post data`);
        }, 1000)
    );
}

async function fetchAllData() {
    let [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
    console.log(user);
    console.log(posts);
}

fetchAllData();

/*
Task 2: Error Handling in Async/Await with Promise.all

Write two functions fetchSuccess() and fetchFailure(), where fetchSuccess() returns a promise that resolves successfully after 1 second, and fetchFailure() returns a promise that rejects with an error after 1 second.

Create a function handlePromises() that calls both functions using Promise.all and handles success and failure cases.
*/

function fetchSuccess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Success`);
        }, 1000);
    });
}
function fetchFailure() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`Rejected`);
        }, 1000);
    });
}

// Promise.all() returns a promise that resolves when all promises in the array argument have resolved, or if any promise gets rejected it immediately rejects with the reason of the first promise that gets rejected.
async function handlePromises() {
    try {
        let results = await Promise.all([fetchSuccess(), fetchFailure()]);
        results.forEach((result) => {
            if (result.status === "fulfilled") {
                console.log(result.value);
            } else {
                console.log(result.reason);
            }
        });
    } catch (error) {
        console.log(`Error occurred`, error);
    }
}

handlePromises();

/*
Task 3: Timeout with Async/Await and Promise.race

Create a function fetchWithTimeout(promise, timeout) that takes a promise and a timeout value in milliseconds. Use Promise.race() to return the result of the promise if it resolves within the timeout, otherwise return "Timeout exceeded".
*/

function fetchWithTimeout(promise, timeout) {
    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject("Timeout exceeded"), timeout)
    );

    return Promise.race([promise, timeoutPromise]);
}

function fetchData() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Data fetched"), 3000)
    );
}

fetchWithTimeout(fetchData(), 2000)
    .then((result) => {
        console.log(`Result`, result);
    })
    .catch((error) => {
        console.log(`Error occurred`, error);
    });
