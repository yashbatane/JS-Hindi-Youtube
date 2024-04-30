// const tinderUser = new Object(); // singleton object

const tinderUser = {}

tinderUser.name = "yash"
tinderUser.emial = "yash@gmail.com"
tinderUser.loggedIn = false

// console.log(tinderUser);


//  Nested Object
const otherUser = {
    age : 18,
    fullname : {
        userInfo : {
            userId : "123abc",
            userProfession : "Engineer"
        }
    }
}

// console.log(otherUser);
// console.log(otherUser.fullname.userInfo.userProfession);

const obj1 = {1 : "a",2 : "b"}
const obj2 = {3 : "a",4 : "b"}
const obj3 = {5 : "a",6 : "b"}

// const obj4 = Object.assign(obj1,obj2,obj3) // to combine or concatinate the differents object we can use object.assign 

// const obj4 = Object.assign({},obj1,obj2,obj3) // here we used {} curly bracses so every object can concat in the {} target object it is optional but it is good practice to use.

// most used or easy way to concat the objects
const obj4 = {...obj1,...obj2,...obj3}  // sperad operator to concat the objects 

// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
] // array ke andar objects most used in db's

// console.log(users[1].email);  // accessing the array of objects

// console.log(Object.keys(tinderUser)); //this will give you all the keys inside the tinderUser object

//  the synatax is Object.keys(or iske under jo object ki keys chahiye uska name)

// console.log(Object.values(tinderUser)); // giving values


// console.log(Object.entries(tinderUser)); // giving keys and value in the array of array form


// kahi bar kya hota h apan array loop through krte h or ek value nikalte h to kahi bar vo value exist hi nhi krti to crashed hone ke chances rehte h to usse bachne ke liye apn Object.hasOwnProperty use krte h jo ki output boolean terms me deta h .
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Object destructring

const course = {
    course : "B.Tech",
    Branach : "CSE",
    courseInstructor: "Yash"
}

// console.log(course.courseInstructor); // how we access normally


// but in Js we can do object destructring
// and we can do in react also the destructring

// const {courseInstructor} = course 

//  the syntax if const {key} = object name (konse object me se krna h )

// or another way to destructure

const {courseInstructor : instructor} = course  // we can do in the short form too

console.log(instructor);


// JSON = javascript object notation 

// object ko json format me bhejna pdta h  

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
  
// this is also in the JSON format but in array form

[
    {},
    {},
    {}
]