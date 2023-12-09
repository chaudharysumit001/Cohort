// Passing functions as an argument

// finds the square of the input
function square(n){
    return n*n;
}
function cube(n){
    return n*n*n
}

function sumOfSomething(a,b,fn){
    const val1= fn(a)
    const val2=fn(b)
    return val1+val2;
}

// finds the sum of the squares of the inputs
// function sumOfSquares(a,b){
//     const val1= square(a)
//     const val2= square(b)
//     return val1+val2
// }

// function sumOfCubes(a,b){
//     const val1= cube(a)
//     const val2= cube(b)
//     return val1+val2
// }


// console.log(sumOfSquares(4,5));
// console.log(sumOfCubes(4,5));

console.log(sumOfSomething(4,5,square));
console.log(sumOfSomething(4,5,cube));