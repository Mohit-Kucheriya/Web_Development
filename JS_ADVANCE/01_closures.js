/*
closures : Function that access variables outside its scope i.e they remember their environment, so they can access to variables even after the function has finished executing.
*/

function outerFunction() {
    let counter = 4;
    return function () { // inner function is returned by outer function, and it has access to the outer function's variables.
        counter++;
        return counter;
    }
}

let increment = outerFunction();
console.log(increment());
