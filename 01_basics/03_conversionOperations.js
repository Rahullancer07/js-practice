let number = undefined;

console.log(typeof number);

let valueInNumber = Number(number);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// initially -- type -- Number(value) --- type(Number(value))
// 33 -- number -- 33 -- number
// "33" -- string -- 33 -- number
// "" -- string -- 0 -- number
// "33abc" -- string -- NaN -- number
// true -- boolean -- 1 -- number
// null -- object -- 0 -- number
// undefined -- undefined -- NaN -- number


let IsLoggedIn = null;

let booleanIsLoggedIn = Boolean(IsLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// true -- true
// "" -- false
// "Rahul" -- true
// null -- false
// undefined -- false
// -2 -- true

let num = 33;
let numString = String(num);
console.log(numString); // --- 33
console.log(typeof numString); // ---- string

/* ==========Operations========== */
let value = 3;
let negValue = -value;
// console.log(negValue);


console.log(1 + "2");
console.log("1" + 2);
console.log(1 + 2 + "2");
console.log(1 + "2" + 1 + 3);

// it will do Mathematical sum until it does not strike with String from left to right


console.log(+true); 
console.log(+false);
console.log(+"");
console.log(+"Rahul");
console.log(typeof +"33");

// + is basically Number() function and the return type is number 
