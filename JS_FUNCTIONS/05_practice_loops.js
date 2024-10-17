/*
Task 1: Sum of First N Natural Numbers
Write a function sumOfN(n) that returns the sum of the first n natural numbers
*/
let n = 10;
function sumOfN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfN(n));

/*
Task 2: Multiplication Table
Write a function printMultiplicationTable(m) that returns the multiplication table for m. Values return in the array must be of the format 2 * 2 = 4
*/
function printMultiplicationTable(m) {
    let mulArr = [];
    for (let i = m; i <= m; i++) {
        for (let j = 1; j <= 10; j++) {
            mulArr.push(`${i} * ${j} = ${i * j}`);
        }
    }
    return mulArr;
}
console.log(printMultiplicationTable(5));

// Second approach
function printMultiplicationTables(m) {
    let mulArr = [];
    for (let j = 1; j <= 10; j++) {
        mulArr.push(`${m} * ${j} = ${m * j}`);
    }
    return mulArr;
}
console.log(printMultiplicationTables(6));

/*
Task 3: Count Vowels in a String
Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.
*/
function countVowels(str) {
    let noOfVowels = 0;
    for (let i = 0; i < str.length; i++) {
        if (
            str[i] == "a" ||
            str[i] == "e" ||
            str[i] == "i" ||
            str[i] == "o" ||
            str[i] == "u"
        ) {
            noOfVowels++;
        }
    }

    return noOfVowels;
}
console.log(countVowels("Mohit"));

// second approach
function countNoOfVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
console.log(countNoOfVowels("Aeroplane"));

// third approach
/*
match() method is used to find all the matches in a string.
*/
function countAllVowels(str) {
    let matches = str.match(/[aeiou]/gi); // here we are using regex to find all the vowels in the string and gi is the global flag which means it will search for all the matches in the string i.e aeiou and case insensitive.
    return matches ? matches.length : 0;
}
console.log(countAllVowels("Apple"));

