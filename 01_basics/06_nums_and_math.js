const value = 1234.546 // 1234.546
const num = new Number(1234.564) // [Number: 1234.564]

console.log(value);
console.log(num);

const stringNum = num.toString();
console.log(stringNum); // type -- string

const fixedNum = num.toFixed(2);
console.log(fixedNum);

const salary = 2000000;
console.log(salary.toLocaleString()); // us standard
console.log(salary.toLocaleString("en-IN")); // IN standard

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)