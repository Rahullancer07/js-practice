const username = "Rahul";
const age = 23;

// way 1 to print -- String concatenation
console.log("My name is " + username + " and my age is " + age);

// way 2 : the good way -- String interpolation
console.log(`My name is ${username} and my age is ${age}`);

const stringValue = new String("Hello world");

//-------- Find character at any index---------

console.log(stringValue.at(-2)); // accepts both negative and positive values
console.log(stringValue.charAt(2)); // will return empty string if index ranges out of [0 , len(string)];

//---------Find index of any character----------

console.log(stringValue.indexOf('l')); // returns first occurence of character

console.log(stringValue.indexOf('t'));// returns -1, because character is not present 

console.log(stringValue.lastIndexOf('l')); // returns the last index of the provided string

const sentence = "Today is the Monday is the!! Time is 9:45 is the."

console.log(sentence.lastIndexOf('the', 30)); // last occurence/index of "the" before the index 30


//-------------Slice and substring-------------

const subSentence = sentence.slice(-10,-2);
console.log(subSentence); 
// accept both negative and positive values ( start < end )

const subSentence1 = sentence.substring(0,10);
console.log(subSentence1);
// only accept positive values (0 , n)


// ------------Trim----------------

const fullName = "   Rahul Yadav   ";
console.log(fullName);
console.log(fullName.trim()); 


// -----------Replace------------

const aboutUser = "My name is Rahul. My full name is Rahul Yadav";
console.log(aboutUser);

const aboutNewUser = aboutUser.replace("Rahul", "Rohan"); // will only replace the one matching string
console.log(aboutNewUser);

const updatedAboutNewUser = aboutUser.replaceAll("Rahul", "Rohan"); // will replace all matching string
console.log(updatedAboutNewUser);

//-----------Includes---------

console.log(aboutUser.includes("Rahul"));
console.log(aboutUser.includes("Priyanka"));

//-----------Split------------

console.log(aboutUser.split(' ')); // returns an array after spliting the string based on the provided input string

console.log(aboutUser.split('Rahul')); // the array will not include the input string