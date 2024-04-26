// Array

const arr = [1,2,3,4,5];
const arr1 = [1,"yash",true,2,{}];

// console.log(arr,arr1);

const arr3 = new Array(1,3,"yash");
// console.log(arr3);
// console.log(arr3[3]);

//  Array Methods
arr.push(5);
// console.log(arr);

arr.push(0);
// console.log(arr);

arr.pop();
// console.log(arr);

arr.shift();   // pop the element form aage
// console.log(arr);

arr.unshift(100);  // push the element from aage
// console.log(arr);

// console.log(arr.includes(20));  // check the value exist or not and give the output in the form of boolean terms
// console.log(arr.indexOf(3));   
// console.log(arr.indexOf(10));  // if index doesn't exist it will give you -1;


const newArr = arr.join();
// console.log(arr);

// join method change into string and collect all the element and its typeof also converts into string
// console.log(newArr);

// console.log(typeof newArr);  // String

// console.log(arr);

console.log("A" , arr);
console.log(arr.slice(1,3));  // slice give the value from 1 to 2 last index doesn't include

// and it doesn't changes in array too. 

console.log("B" , arr);  

console.log(arr.splice(1,3));  // Splice gives the values from 1 to 3 indexes it includes last index 

// but it changes the original array and gives the value which we doesn't include in the splice.

console.log("C" , arr);