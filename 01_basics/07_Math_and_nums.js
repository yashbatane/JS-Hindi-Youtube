const score = 300;
// console.log(score);

const balance = new Number(400); // declare a variable using object with typeof (number)
// console.log(balance);

// console.log(balance.toString()); // convert no. to string
// console.log(typeof(balance));

console.log(balance.toFixed(3));  // it gives you number after decimal points
 
const newNumber = 10.2886543;   // kind of round figure
// console.log(newNumber.toPrecision(2));

const otherNumber = 19359295;
// console.log(otherNumber.toLocaleString()); // this gives you according to US standarads.

// console.log(otherNumber.toLocaleString('en-IN')); // this gives you in the Indian Standards form



// +++++++++++++++++++Maths+++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  // convert negaative to positive but not vice versa
// console.log(Math.round(4.6)); // round figure
// console.log(Math.ceil(4.2));  // ceil mtlb chaat (terace)
// console.log(Math.floor(4.9));  // floor niche ki value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  // this method gives you value b/w 0 to 1
//  most commonly used in the game fo dice 

console.log((Math.random()*10)+1); // we added +1 bcoz random can give 0 also 

console.log(Math.floor(Math.random()*10)+1); // for round figure

const min = 10
const max = 20

// for if we want to set the limit for lies b/w min/max

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// here we added min so it will added the value in the min value do it can give result according to limit what we set in the min variable