const marvel_heroes = ["IronMan", "SpiderMan", "DoctorStrange", "Groot"];

const dc_heroes = ["BatMan", "Flash", "SuperMan"];

// console.log(marvel_heroes.push(dc_heroes)); // it will directly add the array to the input array
const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

const allHeroesTogeather = [...marvel_heroes, ...dc_heroes];
console.log(allHeroesTogeather);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// till what level you want to flat , flat(level)
console.log(real_another_array)

console.log(Array.isArray("Rahul"))
console.log(Array.from("Rahul"))
console.log(Array.from({name: "Rahul"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));