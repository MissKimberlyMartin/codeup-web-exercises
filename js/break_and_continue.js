"use strict";

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.


// prompt: odd # 1-50
// loop & break: invalid input will keep prompting for #
// log: # to skip
// loop & continue: output all odd # 1-50 (skip input)
// log: "Yikes! Skipping number: " + input


// Class walk-through solution

// do {
//     var promptUser = Number(prompt("Enter odd number between 1 and 50"));
//
//     if (promptUser < 0 || promptUser > 50)  {
//         alert("Number is invalid");
//     } else if (promptUser % 2 === 0)    {
//         alert("Number is not odd.");
//     } else if (isNaN(promptUser))  {
//         alert("Not a number");
//     } else  {
//         alert("Number is valid");
//         console.log("Number to skip: " + promptUser);
//         break;  // breaks "do while" loop and continues to the next for()
//     }
// } while (true)
//
// for (var i = 1; i <= 50; i++)   {
//     if (i % 2 === 0)    {
//         continue;
//     }
//
//     if (i === promptUser)   {
//         console.log("Yikes! Skipping number: " + i);
//     } else  {
//         console.log("Here is an odd number: " + i);
//     }
// }



// My best attempt to solve:

// var needInput;
// var isValid = parseFloat(needInput);
//
// do {
//     needInput = prompt("Enter an odd number between 1 and 50")
// } while (!(needInput % 2 === 1 && needInput > 0 && needInput < 50));
//
// console.log("Number to skip is: " + needInput);
//
//
// for (var i = 1; i < 50; i += 2) {
//     if (isValid == i)  {
//         console.log("Yikes! Skipping number: " + i);
//     } else {
//         console.log("Here is an odd number: " + i);
//     }
// }




