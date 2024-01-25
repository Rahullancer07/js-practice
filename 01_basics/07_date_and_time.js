const date = new Date();
console.log(date); // type -- object
console.log(date.toDateString()); // Thu Jan 25 2024
console.log(date.toISOString()); // 2024-01-25T18:12:21.889Z
console.log(date.toJSON()); // 2024-01-25T18:12:21.889Z
console.log(date.toLocaleDateString()); // 1/25/2024
console.log(date.toLocaleString()); // 1/25/2024, 6:12:21 PM

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday" , "Thrusday" , "Friday" , "Saturday"];

// if i want to print todays day and time
console.log(`Today is ${dayNames[date.getDay()]} and time is ${date.getHours()}`);

// date.getTime() -- returns Milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(date.getTime());
console.log(Math.floor(date.getTime()/1000)); // converted to Seconds


// toLocaleString()
const myDate = new Date();
const options = {
    weekday : "short",
    year: "numeric",
    month: "long",
    day: "2-digit",
}

console.log(myDate.toLocaleDateString('en-US', options));