// singleton
// Object.create

// object literals

const mySym = Symbol("key1") //symbol returns a unique code and you can provide string as an optional parameter 

console.log(Symbol("foo") == Symbol("foo"));


const JsUser = {
    name: "Rahul",
    "full name": "Rahul Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Bengaluru",
    email: "rahul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "rahul@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "rahul@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());