/*
Task 1: Array Filtering
Write a function filterNumbers(arr) that returns only numbers from a mixed array.
*/
let mixedArr = ["Mohit", 12, 10, true];

function filterNumbers(arr) {
    return arr.filter(function (elem) {
        return typeof elem === "number";
    });
}

let resultArr = filterNumbers(mixedArr);
console.log(resultArr);

/*
Task 2: Array Reversal
Write a function reverseArray(arr) that reverses the array.
*/
let arrRev = [10, 20, 30, 40, 50];

function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray(arrRev));

/*
Task 3: Find Maximum in an Array
Write a function findMax(arr) that returns the largest number in the array
*/
let maxArr = [2, 10, 15, 30, 65, 10, 101];

function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax(maxArr));

/*
Task 4: Remove Duplicates from an Array
Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
*/
let duplicateArr = [10, 20, 30, 11, 20, 15]

function removeDuplicates(arr) {
    let unique = []
    arr.forEach(element => {
        if (!unique.includes(element)) { // check if the element is already in the array
            unique.push(element)
        }

    });

    return unique
}
console.log(removeDuplicates(duplicateArr));

/*
Task 5: Flatten a Nested Array
Write a function flattenArray(arr) that takes a nested array and returns a single flattened array.
*/

let arr = [1, 2, [3, 4], 5, [6, [7]]]
function flattenArray(arr) {

    return arr.flat(Infinity);
}
console.log(flattenArray(arr));
