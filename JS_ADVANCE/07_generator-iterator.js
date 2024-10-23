/*

Generator function : Generator functions doesn't execute things all at once, but it actually creates the things on resume basis. It is a special object called Generator function.
1. When you hit it once, it gonna generate the result once, and when you hit it again, it will generate the result again. It remember the refernce of the generator function.
2. It doesn't execute the whole things at once.
3. yield keyword is used to pause the execution of the generator function and wait for the next value.
4. next() method is used to get the next value from the generator function.
5. To get the value we use .next().value

*/

function* generatorIterator() {
    yield 1;
    yield 2;
    yield 3;
}

let gen = generatorIterator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next().value);
console.log(gen.next().value);

let gen2 = generatorIterator();
console.log(gen2.next().value);


