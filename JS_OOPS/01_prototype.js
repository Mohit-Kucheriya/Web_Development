/*
1. JavaScript is a prototype based programming language.
2. Is JS a Object based programming language?
3. It supports Object Oriented Programming(OOP) concepts, but it is not Object based programming language.
   JS is prototype based programming language.
*/

let computer = {
    cpu: "Intel",
    ram: "16GB",
};
console.log(`computer`, computer); // computer is an object, which has cpu and ram property.

let lenovo = {
    screen: "15.6",
    __proto__: computer, // here __proto__ is a special property of JS, which we are using to link computer object to lenovo object.
};

// In computer object there is special property called dunder prototype. And its synatx is __proto__
console.log(`lenovo`, lenovo); // lenovo is an object, which has screen property.
console.log(`lenovo`, lenovo.__proto__); // Now lenovo has a reference to computer object.

let genericCar = {
    tyres: 4,
};
console.log(`genericCar`, genericCar); // genericCar is an object, which has tyres property.

let tesla = {
    driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar); //  In this way tesla object is linked to genericCar object, which can access genericCar methods and properties.
console.log(`tesla`, tesla);
console.log(`tesla`, Object.getPrototypeOf(tesla)); // tesla has a reference to genericCar object.

