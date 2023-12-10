
const { log } = require("console")
const fs = require("fs")

// my own asynchronous function

// function pranayReadFile(cb){
//     fs.readFile("a.txt","utf-8",function(err,data){
//         cb(data);
//     })
// }

// //callback function to call
// function onDone(data){
//     console.log(data);
// }
// pranayReadFile(onDone)



// my own asynchronous function
function pranayReadFile(cb){
    console.log("Inside Read File")
    // return new Promise(function(resolve){
        var p= new Promise(function(resolve){
        console.log("Inside Promise");
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("Before resolve");
            resolve(data);
         })
    })
    return p;
}

//callback function to call
function onDone(data){
    console.log(data);
}

// var a= pranayReadFile();
// console.log(a) // Promise Pending
// a.then(onDone)

pranayReadFile().then(onDone);


// Flow
// Inside Read File
// Inside Promise
// Before resolve
// Hello from a.txt