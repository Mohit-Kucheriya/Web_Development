// Q4 : Write a do while loop that adds numbers from 1 to 3 and stores the result in a variable named total
let total = 0;
let i = 1;
do {
    total = total + i;
    i++;
} while (i <= 3);
console.log(total);

// Q5 : Write a for loop that multiplies each element in the array [2,4,6] by 2 and stores the result in a new variable named multipliedNumbers.
let numberArray = [2, 4, 6];
let multipliedNumbers = [];

for (let i = 0; i < numberArray.length; i++) {
    let calculateNumbers = numberArray[i] * 2;
    multipliedNumbers.push(calculateNumbers);
}
console.log(multipliedNumbers);

// Q6 :  write a for loop that lists all the cities in the array ["Paris", "London", "New York", "Dubai"] and stores them in a new array named cityList.
let cities = ["Paris", "London", "New York", "Dubai"];
let cityList = [];

for (let c = 0; c < cities.length; c++) {
    cityList.push(cities[c]);
}
console.log(cityList);
