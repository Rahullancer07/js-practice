const arr = [1, 2, 3, 4, 5, 6];

// for each -- it does not return values
const items = arr.forEach((item) => {
  // console.log(item);
  return item;
});

console.log(items); // undefined

// -------- Filter ----------

// Filter return values

const filterValues = arr.filter((val) => {
  return val >= 4;
});

const filteredItems = arr.filter((val) => val >= 4);

console.log(filterValues);
console.log(filteredItems);

// ------------- MAP ---------------
const incrementedArr = arr.map((item) => item + 10);
console.log(incrementedArr);

// Chaining
const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const modifiedArr = newArr
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 50);

console.log(modifiedArr);

// -----------REDUCE----------------
// It takes two arguments , Accumulator and value, after every iteration , the accumulator gets updated according to the operation

const newArrTwo = [1, 2, 3, 4];

const initialValue = 0;
// const sumArray = newArrTwo.reduce(function (acc, currVal) {
//   console.log(`Acc: ${acc} and currValue: ${currVal}`);
//   return acc + currVal;
// }, initialValue);

const sumArray = newArrTwo.reduce(
  (acc, currVal) => acc + currVal,
  initialValue
);

console.log(sumArray);

const shoppingCart = [
  {
    item: "UnderArmour Bag",
    price: 8999,
  },
  {
    item: "Snitch Shirt",
    price: 1999,
  },
  {
    item: "Esthreall Shirt",
    price: 3999,
  },
];
const shippingCharges = 100;
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price , shippingCharges);

console.log(priceToPay);