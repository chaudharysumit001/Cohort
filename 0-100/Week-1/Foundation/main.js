// console.log("Hello World");

// console.log(a);

// // Variables -- value can change throughout the program

// //1. let
// var b = 10;
// b = 2;
// console.log(b);

// //2. var
// var a = 10;
// a = 2;
// console.log(a);

// //3. const
// const c = 10;
// //you cannot change the value
// // c = 2;
// //TypeError: Assignment to constant variable.
// console.log(c);

//Datatypes

//String
let firstName = "Pranay";

//Number
let age = 24;

//Boolean
let isMarried = true;

console.log("This Person name is " + firstName + " and their age is " + age);

//if-else
if (isMarried == true) {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " is not married");
}

//Loops
let ans = 0;
for (let i = 0; i <= 1000; i++) {
  ans = ans + i;
}
console.log(ans);

// Arrays

const personArray = ["Pranay", "raman", "kirat"];

console.log(personArray[0]);

console.log(personArray);

//print even no's
const ages = [21, 22, 23, 24, 25];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] % 2 == 0) {
    console.log("Even No: ", ages[i]);
  }
}

// const personsArray = ["Harkirat", "Raman", "priya"];
// const genderArray = ["male", "male", "Female"];
// for (let i = 0; i < personArray.length; i++) {
//   if (genderArray[i] == "male") {
//     console.log(personArray[i]);
//   }
// }

//Objects

const user1 = {
  firstName: "Pranay",
  gender: "male",
};

console.log(user1);
console.log(user1.firstName);
console.log(user1["gender"]);

//Array of objects
const allUsers = [
  {
    firstName: "Pranay",
    gender: "male",
  },
  {
    firstName: "Raman",
    gender: "male",
    metadata: {
      age: 21,
      address: "",
    },
  },
  {
    firstName: "Priya",
    gender: "female",
  },
];
for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i].gender == "male") {
    console.log(allUsers[i].firstName);
  }
}

// Functions

function findSum(a, b) {
  // Do things with the input and return an output
  const sumValue = a + b;
  return sumValue;
}
// function calling
var sum1 = findSum(1, 34);
console.log(sum1);

var sum2 = findSum(3, 45);
console.log(sum2);

// Callback functions

function sum(num1, num2, fnToCall) {
  //fnTocall - function goes as an argument to function
  let result = num1 + num2;
  fnToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// first approach
const finalSum = sum(1, 2, displayResult);
// displayResult(finalSum)

function calculateArithmetic(a, b, type) {
  if (type == "addition") {
    const value = addition(a, b);
    return value;
  }
  if (type == "subtraction") {
    const value = subtraction(a, b);
    return value;
  }
}
function addition(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}

const data = calculateArithmetic(3, 7, "subtraction");
console.log(data);

//setTimeout

function greet() {
  console.log("Hello World");
}
function greetAlien() {
  console.log("Hello Alien");
}
//setTimeout - after 1 sec call greet function
// call a function after some duration
// setTimeout(greet,1*1000)
setTimeout(greetAlien, 3 * 1000);

//setInterval function
// log data every second

setInterval(greetAlien, 1 * 1000);
