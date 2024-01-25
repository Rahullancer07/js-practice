const arr = [1,2,3,4,5];
// console.log(arr);
// console.log(typeof arr); // object

const newArr = new Array(1,2,4,2,3);
// console.log(newArr);

const heroes = ["IronMan", "Captain America", "Black Panther"];

// ------Meathods--------
heroes.push("Spiderman");
console.log(heroes);
heroes.push("flash");
heroes.pop();

heroes.unshift("Thor"); // add the value at the start
heroes.unshift("Doctor Strange");
heroes.shift(); // remove the value at the start
console.log(heroes);

console.log(heroes.indexOf("IronMan")); // 0 - index pos
console.log(heroes.includes("Batman")); // false


const allTogether = heroes.join(); // returns string by joining all values seperated by commas into one string
console.log(allTogether); 

// Splice and Slice
const myNums = [1,2,3,4,5];
console.log(myNums);

const newNums = myNums.slice(1,4); // it does not effect the original array
console.log(newNums);
console.log("A" , myNums);

const newNumsTwo = myNums.splice(1,4); // it removes the values from the original array
console.log(newNumsTwo);
console.log("B", myNums);