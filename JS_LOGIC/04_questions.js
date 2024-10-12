// Q1 : merge two arrays from two different api calls 
// Note : The spread operator is used to expand an array into its individual elements. and it does not modify the original array. we can use it to merge two arrays.
let names = ["John", "Jane", "Doe"];
let lastNames = ["Smith", "Johnson", "Williams"];
let fullNames = [...names, ...lastNames];
console.log(fullNames);

// Q2 :  filter the given array of objects with the product type and return the filtered array
let products = [
    { name: "Laptop", type: "Electronics" },
    { name: "Shirt", type: "Clothing" },
    { name: "Phone", type: "Electronics" },
    { name: "Shoes", type: "Footwear" },
    { name: "Tablet", type: "Electronics" }
];
let filteredArray = products.filter(function (product) {
    return product.type === "Electronics";
})
console.log(filteredArray);

// Q3 : Mapping over an array of user data to create a list of user cards
const users = [
    { name: "John", age: 20 },
    { name: "Jane", age: 21 },
    { name: "Doe", age: 22 },
];
const userCards = users.map(function (user) {
    return `<div><h3>${user.name}</h3><p>${user.age}</p></div>`
})
console.log(userCards);

// Q4 : Grouping an array of objects by a specific property (e.g., grouping user by role)
const userArray = [
    { name: "John", role: "admin" },
    { name: "Jane", role: "user" },
    { name: "Doe", role: "admin" },
    { name: "Smith", role: "user" },
    { name: "Johnson", role: "user" },
];

let obj = {}

userArray.forEach(function (user) {
    /*
    1. In these we are checking if the obj object contains that particular field and we can access them using []
    2. objects key can be accessed using dot notation and also using []
    3. if the key is not present new key is created in the object and the user  is pushed into the array and array is assigned as value to that key
    4. if the key is already present in the object then we are pushing the user into the existing array.
    when the role is not present, a new key (the role) is created in the obj object, and an empty array is assigned to that key.
    */

    if (obj[user.role]) {
        obj[user.role].push(user)
    }
    else {
        obj[user.role] = []
        obj[user.role].push(user)
    }
})
console.log(obj);
console.log(obj.admin);

