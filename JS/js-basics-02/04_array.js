// Q1.
let teaFlavors = ["orangeTea", "greenTea", "iceTea"];
let firstTea = teaFlavors[0];
console.log(firstTea);

// Q2.
let cities = ["London", "Tokyo", "Paris", "New York"];
let favouriteCity = cities[2];
console.log(favouriteCity);

// Q3.
let colors = ["Red", "Pink", "Green", "Orange"];
colors[1] = "Yellow";
console.log(colors);

// Q4. 1st way
let citiVisited = ["Mumbai", "Sydney"];
citiVisited[citiVisited.length] = "Berlin";
console.log(citiVisited);

// 2nd way using push method, adds anu value at the end of the array.
citiVisited.push("Australia");
console.log(citiVisited);

// Q5. pop: remove the last element from the array and returns it
let chocolate = ["Dairy milk", "Kit-Kat", "5-Star"];
let removeLastChocolate = chocolate.pop();

console.log(chocolate);
console.log(removeLastChocolate);

// Q6. softCopy : means its pointing to the same reference only.
let originalArray = [10, 20, 30];
let softCopyOfArray = originalArray;

console.log(originalArray);
console.log(softCopyOfArray);

// Q7. hardCopy : means, if we change anything in one array it should not get refelect in the other one.
// By using spread Operator we achieve this, using ...
let indianStates = ["Rajasthan", "Maharashtra", "Goa", "Banglore"];
let hardCopyOfArray = [...indianStates];

console.log(indianStates.push("Hayderabad"));
console.log(indianStates);

console.log(hardCopyOfArray);

// Q8.
let mergeArray1 = ["Tennis", "Football"];
let mergeArray2 = ["Cricket", "Hockey"];
let mergeSports = mergeArray1.concat(mergeArray2);
console.log(mergeSports);

// Q9.
let exampleOfProtein = ["Whey", "Soya", "Plant based"];
let findLength = exampleOfProtein.length;
console.log(findLength);

// Q10. indludes : return the boolean value i.e true or false, checks if the value is present in the array or not.
let checkBucketList = ["Mumbai", "Jaipur", "Manali", "Sikkim"];
let isSikkimInList = checkBucketList.includes("Sikkim");
console.log(isSikkimInList);
