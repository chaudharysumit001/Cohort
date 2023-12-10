const fs= require("fs")

fs.readFile("a.txt","utf-8",function(err,data){
  console.log(data)
})

console.log("hiii There");
let a=0;
//takes very long, longer than file read
for(let i=0;i<1000000;i++){
  a++;
  
}

console.log("hi there 2");

// Flow
// 1. hi there
// 2. hi there 2
// 3. a.txt data 