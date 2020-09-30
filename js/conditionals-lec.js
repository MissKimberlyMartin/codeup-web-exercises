"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin

// if (isAdmin)  {
//     //show admin nav bar
// }

//TODO Together: Send a 20% off coupon if its users birthday

// if (isBirthday) {
//     // send a coupon
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

// var isRainy= true;
// if (isRainy)    {
//     alert("It's raining");
// }

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

// var itemCost = 10;
// var currentBalance = 50;
//
// if (itemCost < currentBalance)  {
//     alert("You can purchase this item!");
// }   else    {
//     alert("You do not have enough money to purchase this item");
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

// var numberOfLives = 0;
//
// if (numberOfLives === 0)    {
//     alert("Sorry, game over");
// } else  {
//     alert("Woo hoo! you are still alive!");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
//
// var weather = "snowing";
//
// if (weather === "snowing") {
//     alert("It's snowing");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

// var numberInput = 11;
// if (numberInput > 10)   {
//     alert("true");
// }

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
//
// var isAdmin = false;
//
// if (isAdmin)  {
//     console.log("is admin");
// } else  {
//     console.log("regular user");
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else alert "have a nice day!"

// var isRainy = false;
//
// if (isRainy)    {
//     alert("It's raining");
// } else  {
//     alert("have a nice day!");
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var numberOfLives = 3;
//
// if (numberOfLives === 0)    {
//     alert("Sorry, game over");
// } else {
//     alert("Next Level!");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing",
// else alert "Check back later for more details!"

// var weather = "snowing";
//
// if (weather === "snowing")  {
//     alert("It's snowing!");
// } else  {
//     alert("Check back later for more details!");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than 10,
// else alert "the number is less than 10"



//TODO: Refactor todo#1 as a function named checkIfGameIsOver,
// that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.



//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.



// SHOULD WE DELETE STUFF EXAMPLE
//
// var weShouldDeleteStuff = confirm("Are you sure you want to delete?");
//
// if (weShouldDeleteStuff)    {
//     alert("we are deleting EVERYTHING!")
// } else {
//     alert("operation canceled");
// }


//TODO: Write a confirm asking the user if they are 13 years of age or older.
// If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// var isOfAge = confirm("are you 13 years or older?");
//
// if (isOfAge)    {
//     alert("You may proceed");
// } else  {
//     alert("Sorry, you are not able to proceed");
// }


// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!"
// if weather is equal to "snowing",
// alerts "It's raining" if weather is equal to "raining",
// alerts "have a nice day" for all other cases

// var weather = "sunny";
//
// if (weather === "snowing")  {
//     alert("it's snowing");
// } else if (weather === "raining")   {
//     alert("it's raining");
// } else  {
//     alert("have a nice day");
// }


//TODO Together: refactor the above statement as a function

// function weatherAlert(weather)  {
// if (weather === "snowing")  {
//     return "it's snowing";
// } else if (weather === "raining")   {
//     return "it's raining";
// } else  {
//     return "have a nice day";
//     }
// }
//
// console.log(weatherAlert("sunny"));
// console.log(weatherAlert("windy"));
// console.log(weatherAlert("snowing"));


// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input.
// When this function is called, it should return a message informing the user
// what to do when approaching that color light at an intersection.

// function lightColor(color)  {
//     if (color === "green")  {
//         return "At a green light you proceed through the intersection";
//     } else if (color === "yellow")  {
//         return "At a yellow light you should slow down";
//     }   else if (color === "red")   {
//         return "At a red light you must stop!";
//     }   else    {
//         return "Proceed with caution";
//     }
// }
//
// console.log(lightColor("green"));
// console.log(lightColor("red"));
// console.log(lightColor("yellow"));
// console.log(lightColor("blinking"));


// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are
// eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligible for a license.

// var userAge = 16;
// var hasPermit = true;
//
// if (userAge < 15)   {
//     alert("sorry, not eligible yet");
// }   else    {
//     if (userAge === 15) {
//         alert("you are eligible for a learner's permit");
//     } else if (userAge >= 16 && hasPermit)   {
//         alert("you can get a licence");
//     }   else if (userAge >= 16 && !hasPermit)   {
//         alert("you need to get your learner's permit");
//     }   else    {
//         alert("you should not drive");
//     }
// }









// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!







// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.



//TODO: Rewrite the intersection function from earlier as a switch statement.



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

