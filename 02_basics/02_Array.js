const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);  // array ke andar arrya ajayega 
// console.log(marvel_heros);
//output 
// ['thor','Ironmen','spiderman',['superman','flash','btaman']]

// const allHeros = marvel_heros.concat(dc_heros)  // combine krdega dono array ko
// console.log(allHeros);  



// Spread operator (same work as concat only just add 3dots before the array name)
const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]


// array.flat = if there are subarrays so it concat till its depth if we will give the property infinity

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("Hitesh")) // gives boolean values check it is array or not


console.log(Array.from("Hitesh"))  // array.from => convert into array 
// output = ['H','i','t','e','s','h']


console.log(Array.from({name: "hitesh"})) // interesting
// here output is = {}
// coz we have gives the object so its confuse to whom i have to convert the string key or value


let score1 = 100
let score2 = 200
let score3 = 300

//  Array.of also concat.
console.log(Array.of(score1, score2, score3));