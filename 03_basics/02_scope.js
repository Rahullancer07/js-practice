// the problem with var is with its scope
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a); // error : a is not defined
// console.log(b); // error : b is not defined
console.log(c); // no error 

// ------------Interesting-------------

// Hoisting of functions

addOne(2,5); // it wont give error because of hoisting

function addOne(num1 , num2){
    console.log(num1 + num2);
    return;
}

// addTwo(1,4); // gives error -- addTwo is not defined

const sumTwo = function addTwo(num1, num2){
    console.log(num1, num2);
    return;
}
