// Q6 : Use a for-in loop to loop through an object containing city populations. Skip any city with a population below 3 million and store the rest in a new object named 'largeCities'.

const cities = {
    "New York": 8537673,
    "Los Angeles": 3971883,
    Chicago: 2718788,
    Houston: 2296224,
    Philadelphia: 1567000,
    Phoenix: 1563933,
};

let largeCities = {};

for (const city in cities) {
    if (cities[city] < 3000000) {
        continue; // here we are skipping the cities with a population below 3 million.
    }
    largeCities[city] = cities[city]; // here we are storing the city name and population in the largeCities object.
}
console.log(largeCities);

// Q7 : Write a 'forEach' loop that loops through the array ["green tea","black tea","chai","oolaong tea"] and stops the loop when it finds "chai". Store all the teas before "chai" in a new array named 'availableTeas'.
// NOTE : return can only be used inside a function to stop its execution and return a value.

const teas = ["green tea", "black tea", "chai", "oolaong tea"];
const availableTeas = [];

teas.forEach((tea) => {
    if (tea === "chai") {
        return; // Stop the loop when "chai" is found
    }
    availableTeas.push(tea);
});

console.log(availableTeas);

// Q8 :  Write a forEach loop that loops through the array ["Berlin","Tokyo","Sydney","Paris"] and skips "Sydney". Store the other cities in a new array named 'traveledCities'.

let allCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

allCities.forEach((city) => {
    if (city === "Sydney") {
        return;
    }
    traveledCities.push(city);
});

console.log(traveledCities);

// Q9 : Write a for loop that iterates through the array [2,5,7,9]. Skip the value '7' and multiply the rest by 2. Store the results in a new array name 'doubledNumbers'.

let numberArray = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] == 7) {
        continue;
    }
    doubledNumbers.push(numberArray[i] * 2);
}
console.log(numberArray);
console.log(doubledNumbers);

// Q10 : Use a 'for-of' loop to iterate through the array ["superman","spiderman","batman","wonderwoman"] and stop when the length of the current word is greater than 10. Store the remaining words in a new array named 'shortWords'.

let myHeroes = ["superman", "spiderman", "batman", "wonderwoman"];
let shortWords = [];
for (const hero of myHeroes) {
    if (hero.length > 10) {
        break;
    }
    shortWords.push(hero);
}
console.log(shortWords);
