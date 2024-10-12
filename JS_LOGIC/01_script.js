// forEach : In forEach we cannot use braek & continue keyword because they it is not the actual loop they are simply the higher-order function. Remember forEach doesn't return anything it is only used to loop.

const names = ["Alice", "Bob", "Charlie", "David"];
names.forEach(function (name) {
    if (name === "Charlie") {
    } else {
        console.log(name);
    }
});

/* 
map : map return us the array. In map to return is must. The new array created by map() will always have the same number of elements as the original array.

If you forget to return a value inside the map() function, the new array will have undefined for those elements.
*/

const heroes = ["Spiderman", "Superman", "Batman", "Hulk"];
const newHeroes = heroes.map(function (hero) {
    return `Marvel ${hero}`;
});
console.log(newHeroes);

// filter
const newNames = ["Mohit", "Harry", "Ron", "Hermoine", "Henry"]
const filterNewNames = newNames.filter(function (newName) {
    return newName.startsWith("H")
})
console.log(filterNewNames);
