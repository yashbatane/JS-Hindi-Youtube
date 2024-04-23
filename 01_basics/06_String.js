const name = "Yash"
const surname = "Gurjar"

// console.log(name + surname);  // old tareeka 


// string interpolation or string literals
// console.log(`My name is ${name} ${surname}`)  // new tareeka

const str = new String('coding world')  // snother way  to declare string (ye sare JS ke objects use krte h {new} keyword)

// console.log(str);

//browser console print
// String {'Yash GUrjar'}

// niche wale array nhi h ye object h jiske {key : value} pair h 

// 0:"Y"
// 1:"a"
// 2:"s"
// 3:"h"
// 4:" "
// 5:"G"
// 6:"U"
// 7:"r"
// 8:"j"
// 9:"a"
// 10:"r"
// length:11

// console.log(str[4]);  // postion pr find krna konsa character h

// console.log(str.__proto__); // check krta h object h ya nhii


// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.charAt(2));  // character bta dega 
// console.log(str.indexOf('g')); // position bta dega

// const newStr = str.substring(0,5); // isme negative value nhi de skte if di to ignore krdega
// console.log(newStr); 

// const newstr1 = str.slice(-1,8); // isme aap negative value bhi de skte h 
// console.log(newstr1);


// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());  // ignore extra spaces (Example if we are taking input in any forms to bahut sare unknowingly of knowingly extra spaces daldete h to usko apne db's me store nhi krna h to isliye trim use krte h pr password ke case me nhi kr skte h logically)

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))  // replace krdeta h 

// console.log(url.includes('sundar'))  // check krta h exist krta h ki nhi (true /false me btata h)

const Str2 = "yash-gurjar-batane"
console.log(Str2.split('-'))  // string ko array me convert krdiya on the basis of (-) 