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
