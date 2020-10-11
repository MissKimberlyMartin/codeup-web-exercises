"use strict";



// Math.random()  // returns a number between 0-1

let randomNum = Math.random() * 10;  // returns a number between 0-10
let randomNum2 = Math.random() * 2;  // returns a number between 0-2

console.log(randomNum);
console.log(randomNum2);

// Math.round()
// cannot use decimal to refer to array index, need to round to nearest integer

let index = Math.round(randomNum);
console.log(index);

console.log(Math.round(randomNum));
console.log(Math.round(randomNum2));

let randomWord = inputArray[index];
console.log(randomWord);

