function myFunc(fname , lname) {
    console.log(`My name is ${fname} ${lname}`);
}

function myFunc(fname , mname , lname){
    console.log(`My name is ${fname} ${mname} ${lname}`);
}

myFunc("Rahul", "Yadav"); // Rahul Yadav undefined
// this is called global namespace pollution


// to avoid it we can use iife (Immediately Invoked Function) : 
// 1) Helps to immediately run the function
// 2) Prevents global namespace pollution because it provides its own scope

(function yourName(fname , lname){
    console.log(`Your name is ${fname} ${lname}`);
})("Rahul" , "Yadav");

(function yourName(fname, mname, lname){
    console.log(`Your name is ${fname} ${mname} ${lname}`)
})("Rahul" , "Singh" , "Yadav")
