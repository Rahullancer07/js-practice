// undestanding this keyword
console.log(this); // return {} in nodeJS environment

// try console.log(this) in browser

const obj = {
  username: "Rahul",
  age: 23,

  welcomeUser : function(){
    console.log(this.username); 
    console.log(this);
  }
};

// obj.welcomeUser();
// obj.username = "Rohan"
// obj.welcomeUser();

function addNum() {
    const num1 = 20;
    console.log(this.num1); // undefined
}

// addNum(); 

// ----------- Arrow function ---------------

// explicit way
const addNumTwo = (num1 , num2) => {
    return num1 + num2;
}

// implicit way
const addNumThree = (num1, num2) => num1 + num2;
const addNumFour = (num1 , num2) => (num1 + num2);

// NOTE : if i use {} -- i have to write return keyword to return values


console.log(addNumTwo(2,4)); // 6
console.log(addNumThree(1,4));
console.log(addNumFour(4,5));
