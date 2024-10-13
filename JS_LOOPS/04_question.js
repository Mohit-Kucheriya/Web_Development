// Q5 : Write a nested loop that creates a multiplication table for numbers 1 to 5 and stores the results in a 2D array named multiplicationTable.
let multiplicationTable = []
let num = 5
for (let i = 1; i <= num; i++) {
    let row = []
    for (let j = 1; j <= num; j++) {
        row.push(i * j)
    }
    multiplicationTable.push(row)
}
console.log(multiplicationTable);




