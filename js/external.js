"use strict";


console.log("Hello from external JavaScript");

// Use the alert function to show a message that says 'Welcome to my Website!'.
alert("Welcome to my Website!");

/* Use a prompt to ask for the user's favorite color. Use the user's
response to alert a message that says that the color entered is your
favorite color too.
*/

var favColor = prompt("What is your favorite color?");
alert("Great, " + favColor + " is my favorite color too!");


/*
When the following exercises asks you to use a number, instead use a prompt to ask the user for that number.
Use an alert to show the results of each problem
 */

/*
You have rented some movies for your kids:
The little mermaid (for 3 days),
Brother Bear (for 5 days, they love it),
and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?
*/

var mermaid = parseInt(prompt("For how many days would you like to rent The Little Mermaid?"));
var bear = parseInt(prompt("For how many days would you like to rent Brother Bear?"));
var hercules = parseInt(prompt("For how many days would you like to rent Hercules?"));

var dailyCost = parseInt(prompt("How much is the daily rental charge per movie?"));

var totalCost = (mermaid + bear + hercules) * dailyCost;

alert("You owe: $" + totalCost);


/*
Suppose you're working as a contractor for 3 companies:
Google, Amazon and Facebook, they pay you a different rate per hour.
Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week?
You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
*/


var googlePay = parseInt(prompt("How much does Google pay you per hour worked?"));
var googleHours = parseInt(prompt("How many hours did you work at Google this week?"));
var googleEarned = googlePay * googleHours;
var amazonPay = parseInt(prompt("How much does Amazon pay you per hour worked?"));
var amazonHours = parseInt(prompt("How many hours did you work at Amazon this week?"));
var amazonEarned = amazonPay * amazonHours;
var fbPay = parseInt(prompt("How much does Facebook pay you per hour worked?"));
var fbHours = parseInt(prompt("How many hours did you work at Facebook this week?"));
var fbEarned = fbPay * fbHours;

var paycheck = googleEarned + amazonEarned + fbEarned;

alert("You paychecks this week will total: $" + paycheck);


/*
A student can be enrolled in a class only if
the class is not full
and the class schedule does not conflict with her current schedule.
*/

var askIfFull = prompt("Is the class full? \(yes/no)");
var askIfConflict = prompt("Does the class schedule conflict with the student's current schedule? \(yes/no)");
var isFull;
var isConflict;
var canEnroll;

if (askIfFull === "yes")    {
    isFull = true;
}   else    {
    isFull = false;
}

if (askIfConflict === "yes")    {
    isConflict = true;
}   else    {
    isConflict = false;
}

if (!isFull && !isConflict) {
    canEnroll = ""
}   else    {
    canEnroll = "not ";
}

alert("The student is " + canEnroll + "eligible to enroll in this class.")

/*
A product offer can be applied only if a person buys more than 2 items,
and the offer has not expired.
Premium members do not need to buy a specific amount of products.
*/

var askPremium = prompt("Are you a premium member? \(yes/no)");
var askItems = parseInt(prompt("How many items are you purchasing?"));
var askExpDate = prompt("Has the expiration date for this offer already passed? \(yes/no)");
var applyOffer;
var isPremium;
var minItems;
var isExp;

if (askPremium === "yes")    {
    isPremium = true;
}   else    {
    isPremium = false;
}

if (askItems >= 2)  {
    minItems = true;
}   else {
    minItems = false;
}

if (askExpDate === "yes")   {
    isExp = true;
}   else    {
    isExp = false;
}

if (isPremium && !isExp || !isPremium && minItems && !isExp)    {
    applyOffer = true;
}   else    {
    applyOffer = false;
}

if (applyOffer) {
    alert("This offer will be applied to your order");
}   else    {
    alert("This offer cannot be applied to your order.");
}