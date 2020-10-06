"use strict"
// create a function that takes in an array of pies baked
// and return the 3 most recently baked pies
// (the three at the end)

// var pies = ["apple", "cherry", "key lime", "huckleberry", "rhubarb", "key lime"];
//
// function bakedPies(array)   {
//     return pies.slice(pies.length - 3);
// }
//
// console.log(bakedPies(pies));


var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
var phoneNumsArr = phoneNumbers.split("\n");

function cleanPhoneNumbers(array) {
    var finalPhoneNumArray = [];
    phoneNumsArr.forEach(function (phoneNum){
        var noDash = phoneNum.split("-");
        // console.log("This is from noDash" + noDash);
        var joinNums = noDash.join("");
        console.log("This is from joinNums" + joinNums);
        finalPhoneNumArray.push(joinNums);
    });
    return finalPhoneNumArray;
}

console.log("Result of function " + cleanPhoneNumbers(phoneNumbers));


// Bonus Challenges

// Create a phone number parser that will convert a string of numbers into a human readable format. The output should depend on the number of digits (account for 7, 10, 11 digit numbers):
// Using multiple functions will be helpful.
//     input = 5552324343, output = 555-232-4343
// input = 5553434, output = 555-3434
// input = 18005552323, output = 1-800-555-2323
//
// Extra Challenge: account for invalid characters
// Extra Challenge: if the input is already formatted, output the unformatted version
// Extra Challenge: allow the parser to accept letters and convert them to the correct numbers