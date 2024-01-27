const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2, obj4) 
console.log(obj3); // All the objects key,value pairs get inserted into the first argument ( here {} )

const course = {
    courseName : "JS Tutorial",
    courseFee : "999",
    courseInstructor : "Hitesh Choudhary"
}

// course.courseName - is okay but if have to use multiple times then use object destructuring 

const {courseName, courseFee : fee} = course
console.log(courseName , fee);