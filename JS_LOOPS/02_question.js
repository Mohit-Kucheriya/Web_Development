/* 
    guidelines for loops: 
 1. initialization : starting point
 2. condition : ending point
 3. increment/decrement : step
 4. code : what to do
 */

// Q3 : Write a 'do-while' loop that prompts a user to enter  their favourite tea type until they enter 'stop'. Store each tea type in  an array named 'teaCollection'.
let teaCollection = [];
let tea;

do {
    tea = prompt(`Enter your favourite tea type. (Please type "stop" to finish)`);
    if (tea !== "stop") {
        teaCollection.push(tea);
    }
} while (tea !== "stop");

/*
so when tea gets stored in the tea variable its check first in if condition and then also checks for while condition like that 

1. The tea input is stored in the `tea` variable:
   tea = prompt(`Enter your favourite tea type. (Please type "stop" to finish)`);
   

2. Immediately after that, it's checked in the `if` condition:

   if (tea !== "stop") {
       teaCollection.push(tea);
   }
  

3. After the entire `do` block is executed (including the `if` statement), the `while` condition is checked:
 
   } while (tea !== "stop");
 

So the sequence is:
1. Get input
2. Check `if` condition
3. Add to array if condition is met
4. Check `while` condition
5. Repeat or exit loop based on `while` condition

This order ensures that:
- The input is processed (potentially added to the array) before deciding whether to continue the loop.
- The same input is used for both the array addition decision and the loop continuation decision.

You've understood the flow correctly!

*/

/*

if stop is given by user both if and while condition will also get check right

Yes, you're absolutely correct! Even when the user enters "stop", both the `if` condition and the `while` condition are checked. Let's walk through what happens when the user enters "stop":

1. The user enters "stop":
   tea = prompt(`Enter your favourite tea type. (Please type "stop" to finish)`);
   // tea now equals "stop"

2. The `if` condition is checked:
   if (tea !== "stop") {
       // This condition is false, so the code inside the if block is not executed
       // teaCollection.push(tea); // This line is skipped
   }

3. The `while` condition is then checked:
   } while (tea !== "stop");
   // This condition is also false

4. Because the `while` condition is false, the loop ends.

So you're right - both conditions are indeed checked, even when "stop" is entered. The `if` condition prevents "stop" from being added to the `teaCollection` array, and the `while` condition ensures that the loop terminates.

This double-check mechanism ensures that:
1. "stop" is not added to the tea collection.
2. The loop ends when "stop" is entered.
.
*/
