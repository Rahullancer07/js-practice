// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// values passed as input in function definition -- Parameters
// values passed as input in function call -- arguments
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) // 3 and 5 are arguments

// console.log("Result: ", result);


function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Rahul"))
console.log(loginUserMessage());


// Rest operator in functions
function calculateCartPrice(...num1){
    return num1;
}

function calculateCartPriceTwo(val1 , val2 , ...others){
    return others;
}

console.log(calculateCartPrice(200, 400, 300)); // returns [200 , 400 , 300];
console.log(calculateCartPrice()); // returns []
console.log(calculateCartPriceTwo(200));
// returns [600, 2000]

// NOTE : If arguments are less than paramenters, then it will return undefined for the parameters which are not defined in arguments

