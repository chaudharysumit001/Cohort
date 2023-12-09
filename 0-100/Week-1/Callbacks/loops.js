
// Calculate sum from 0 to 100

// When you know you want to do some repeated logic again and again over some values
// Here logic is [adding 1 again and again]

let ans = 0;
//1. runs initilization of for loop [let i=1]
//2. comparator section if this condition is true then this logic [i<=100]
// if the condition is false it will break out of the loop
//3. After the loop finishes it does not exit the out of the for loop it goes the ,
// what happens after the body of loop has been complete [i++]

for(let i=1;i<=100;i++){
    ans=ans+i
}
console.log(ans); 
