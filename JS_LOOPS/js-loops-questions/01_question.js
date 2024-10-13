/* 
break and continue.

break : break keyword is used to terminate the loop.
continue : continue keyword is used to skip the current iteration.
*/

// for-of loop: for-of loop is used to iterate over the values of an array.
// for-in loop: for-in loop is used to iterate over the keys of an object.

// Q1 : Write a 'for' loop that loops through the array ["green tea","black tea","chai","oolaong tea"] and stops the loop when it finds "chai". Store all the teas before "chai" in a new array named 'selectedTeas'

let chaiArray = ["green tea", "black tea", "chai", "oolaong tea"];
let selectedTeas = [];

for (let i = 0; i < chaiArray.length; i++) {
    if (chaiArray[i] === "chai") {
        break; // here break will stop the loop and will get out of the loop
    }
    selectedTeas.push(chaiArray[i]);
}
console.log(selectedTeas);

// Q2 : Write a for loop that loops through the array ["London","Paris","New York","Dubai"] and skips "Paris". Store the other cities in a  new array named 'visitedCities'.

let citiesArray = ["London", "Paris", "New York", "Dubai"];
let visitedCities = [];

for (let i = 0; i < citiesArray.length; i++) {
    if (citiesArray[i] === "Paris" || citiesArray[i] === "paris") {
        continue;
    }
    visitedCities.push(citiesArray[i]); // here continue will skip the current iteration and will continue the loop
}
console.log(visitedCities);

// Q3 : Use a 'for-of' loop to iterates through the array [1,2,3,4,5] and stop when the number '4' is found. Store the numbers before '4' in an array named 'smallNumbers'.

let number = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of number) {
    if (num === 4) {
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);

// Q4 : Use a 'for-of' loop to iterate through the array ["pink","red","blue","yellow"] and skip "blue". Store the remaining colors in a new array named 'remainingColor'.

let color = ["pink", "red", "blue", "yellow"];
let remainingColor = [];
for (const col of color) {
    if (col === "blue") {
        continue;
    }
    remainingColor.push(col);
}
console.log(remainingColor);

// Q5 : Use a 'for-in' loop to loop through an object containing city population. Stop the loop when the population of "Berlin" is found and store all the previous cities population in a new object named 'cityPopulation'.

let cities = {
    London: 7000000,
    Paris: 6000000,
    Tokyo: 4000000,
    Sydney: 3000000,
    Berlin: 5000000,
    Dubai: 2000000,
    Mumbai: 1000000,
};

let cityPopulation = {};
for (const city in cities) {  // city is the key of the object
    if (city === "Berlin") {
        break
    }
    cityPopulation[city] = cities[city]; // here we are storing the value of the object in the new object
}
console.log(cityPopulation);
