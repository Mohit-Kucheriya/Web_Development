// Destructuring : 
// Object destructuring allows you to extract properties from objects and assign them to variables.
// Array destructuring lets you unpack elements from arrays into distinct variables.
// Example for object: const { name, age } = person;
// Example for array: const [first, second] = numbers;


// ... existing code ...

const detail = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    hobbies: ["reading", "coding", "hiking"]
};

// Destructuring nested properties
let { address: { city } } = detail;
console.log(city);

// Destructuring multiple properties
let { name, age, occupation } = detail;
console.log(name, age, occupation);

// Destructuring with renaming
let { name: fullName, address: { country: userCountry } } = detail;
console.log(fullName, userCountry);

// Destructuring arrays: The commas act as placeholders, indicating the positions to skip in the array.
let [, , thirdHobby] = detail.hobbies;
console.log(thirdHobby);

// Destructuring with default values
let { salary = 'Not specified' } = detail;
console.log(salary);



