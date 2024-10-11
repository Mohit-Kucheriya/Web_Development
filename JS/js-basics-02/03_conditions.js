// Q1.
let num1 = 5;
let num2 = 8;
if (num1 > num2) {
    console.log(`Num1 is grater than Num2`);
} else {
    console.log(`Nope Num1 is NOT greater `);
}

// Q2.
let oneUserName = "Mohit";
let secondUserName = "Ruchita";

if (oneUserName == secondUserName) {
    console.log(`Hey please another userName`);
} else {
    console.log(`OK! you can choose this userName`);
}

// Q3.
let score = "10";
if (typeof score === "number") {
    console.log(`Hey its a Type Number`);
} else {
    console.log(`Not a Number`);
}

// Q4.
let items = ["Pen", "Pencil"];
if (items.length === 0) {
    console.log(`The given Array is Empty`);
} else {
    console.log(`Not Empty`);
}

// OR

let marvelHeroes = [];
if (marvelHeroes.length) {
    console.log(`Array is Not Empty`);
} else {
    console.log(`Array is Empty`);
}
