"use strict";
// console.log("Welcome to Intro to Objects!");
//
// /*********************************************
//  *              INTRO TO OBJECTS
//  ******************************************** */
//
// /**
//  * Objects are an unordered collection of related data in the form of
//  * key:value pairs
//  */
//
// var rubberDuck = {
//     color: "yellow",
//     role: "emotional support",
//     name: "cody"
// };
//
// console.log(rubberDuck);
//
// /*********************************************
//  *              CREATING NEW OBJECTS
//  ******************************************** */
//
// /**
//  * Objects can be created in JavaScript through the use of the 'new
//  * Object()' constructor, or Object literal notation using curly braces.
//  */
//
// /**
//  * TODO TOGETHER: Create a new variable (of type Object) and call it 'myPhone'. Use either the constructor or Object literal notation.
//  */
//
// // using literal notation
// var myPhone = {
//     color: "forest green",
//     model: "iPhone XS",
//     storage: "128 GB",
//     ring: function (){
//         console.log("Ring ring!");
//     },
//     picture: function (){
//         console.log("Take a picture!");
//     },
// };
//
// console.log(myPhone.color);
// myPhone.picture();
//
// // using constructor
// // var myPhone = new Object();
// //
// // myPhone.color = "forest green";
// // myPhone.model = "iPhone XS";
// // myPhone.storage = "128 GB";
// //
// // console.log(myPhone);
//
// /**
//  * TODO: Create a new Object and call it 'myMac'. use either the constructor or Object literal notation.
//  */
//
// var myMac = {
//
// };
//
// /*********************************************
//  *              PROPERTIES
//  ******************************************** */
//
// /**
//  * TO DO TOGETHER: Using dot notation, assign these properties to your phone
//  * Object: 'model', 'color', 'storage'. Console log your phone variable to
//  * check that the information was stored properly.
//  */
//
//
//
// /**
//  * TO DO: Using dot notation, assign these properties to your Mac
//  * Object: 'model', 'size', 'year', Console log the Object to check if the
//  * information was stored properly
//  */
//
// myMac.model = "Pro";
// myMac.size = "16-inch";
// myMac.year = "2019";
//
// console.log(myMac);
//
// /**
//  * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
//  * type Object and store properties for the user's 'firstName' and
//  * 'lastName'. Use console log to access the user's 'lastName'
//  */
//
// myPhone.name = {
//     firstName: "Kimberly",
//     lastName: "Martin"
// }
// console.log(myPhone);
// console.log(myPhone.name.firstName);
// console.log(myPhone.name);
//
// myPhone.apps = ["Facebook", "Mail", "Pages", "Reddit", "Slack"];
//
// // iterate over each element
// myPhone.apps.forEach(function (app){
//     console.log(app);
// });
//
// /**
//  * TO DO: Using dot notation, assign a property called 'folders' that stores
//  * an Array representing different folders in your system.
//  */
//
// myMac.folders = ["Home", "Pictures", "Downloads", "Trash", "Recent files"];
//
//
// /**
//  * TO DO: Assign a 'login' property. This should be an object that stores
//  * 'username','fakePassword' and 'email'
//  */
//
// myMac.login = {
//     username: "myUserName",
//     fakePassword: "myFakePasswordIsAwesome!",
//     email: "myemail@email-domain.com"
// };
//
// console.log(myMac.login);
// myMac.folders.forEach(function (folder){
//     console.log(folder);
// })
//
// /*********************************************
//  *                  METHODS
//  ******************************************** */
//
// /**
//  * TO DO TOGETHER: We are going to add functionality to our phone Object.
//  * Using the dot notation, add a method named 'call' that console logs the
//  * message: "Dialing..."
//  */
//
// myPhone.call = function (){
//     console.log("Dialing");
// };
//
// myPhone.call();
//
// /**
//  * TO DO: Let's add functionality to our Mac Object. Create a method named
//  * 'powerOn'. When called, this should display a console message that says
//  * "Powering on..."
//  */
//
// myMac.powerOn = function (){
//     console.log("Powering On");
// };
//
// myMac.powerOn();
//
// /**
//  * TO DO TOGETHER: Let's add one more piece of functionality. Create a
//  * method on the phone object that returns a message displaying the user's
//  * firstName and lastName. Hint: use the 'this' keyword.
//  */
//
// myPhone.currentUser = function (){
//     console.log("Current phone user: " + this.name.firstName + " " + this.name.lastName);
// }
// myPhone.currentUser();
//
// /**
//  * TO DO: One last thing. Let's add a 'currentUser' method that displays the
//  * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
//  * the properties we created earlier.
//  */
//
// myMac.currentUser = function (){
//     console.log("Current username: " + this.login.username);
//     console.log("Current user's email: " + this.login.email);
// }
//
// myMac.currentUser();
//
// /*********************************************
//  *                  NESTED VALUES
//  ******************************************** */
//
// /**
//  * Because an Object is a collection of data and functionality, very often
//  * we will see nested values. This can mean an Array of Objects containing
//  * Arrays, Objects containing other Objects and so on.
//  *
//  * It is important to understand the shape of our data so that we can
//  * navigate through it.
//  */
//
// // NOT COMPLETED
//
// // var chooseYourFighter = [
// //     {
// //         firstName: "Spongebob",
// //         lastName: "Squarepants",
// //         catchPhrase: "Squares are cool!"
// //     },
// //     {
// //         firstName: "Patrick",
// //         lastName: "Star",
// //     },
// //     {
// //         firstName: "Darwin",
// //         lastName: "Duck"
// //     },
// //     {
// //         firstName: "Tragdor",
// //         lastName: "The Burninator"
// //     }
// // ];
// //
// // chooseYourFighter.forEach(function (fighter){
// //     console.log(fighter.name.firstName);
// // });
//
//
//
// /*********************************************
//  *                  ARRAYS OF OBJECTS
//  ******************************************** */
//
// /**
//  * If we have an Array of Objects, we can iterate through it to access each
//  * Object element and pull the properties and methods that we need.
//  */


//   Math Methods

