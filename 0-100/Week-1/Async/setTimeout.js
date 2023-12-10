
function findSum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=i
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}
setTimeout(findSumTill100,1000); // calling async function

console.log("Hello");


// Flow 
// 1. First Print Hello
// 2. After 1 sec findSum method output will be print


