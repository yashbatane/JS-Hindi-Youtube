//  Date

let date = new Date();  // Here we created object (Date()) and instance is date
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toString());

let createdDate = new Date(2024,17,3);  // we can pass the date also as per our requirement
// console.log(createdDate);
// console.log(createdDate.toLocaleString());

// let createdDate = new Date(2023, 0, 23, 5, 3)
// let createdDate = new Date("2023-01-14")



// ++++++++++++++++++++++Time+++++++++++++++++++++++

let myTimeStamp = Date.now();  // This will give you current time in Millisecond form 1970yr.

// so if we want to compare the times so it is easy to compare in Milliseconds only
// console.log(myTimeStamp); 
// console.log(createdDate.getTime());  // for comparing current time and what we had declared earlier.

// console.log(Date.now());   // output in millisecond 

// console.log(Date.now()/1000); // for converting into secondes divided by 1000;
// So it will give you output in decimals so for converting them we can use Math.floor


// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate); 
console.log(newDate.getMonth() + 1);  // for finding the exact month so it will give you value in arrays indexes so for that we added +1 for readibility
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",  
})