//  we can declare objects by two types.
//  sigleton
//  object.create


//  object Literals

const jsUser = {
    name : "Yash",
    "full name" : "Yash Batane",
    age : 18,
    email : "Yash024@gmail.com",
    location : "Indore",
    isLoggedIn : false,
    lastLoggedIn: ["M","t","w"]
}

// console.log(typeof jsUser);

// console.log(jsUser.email);  // general way to object access

// console.log(jsUser[email]); // this will give you error coz bts email is string

// console.log(jsUser["email"]);  // this is the another way to accessing the object

// console.log(jsUser["full name"]); // this is the only way to access full name

// console.log(jsUser.full name); // this will give you error.

// How to declare and access the symbol

let mySym = Symbol("key1")

const obj = {
    name : "Yash",
    age : 19,
    // mySym : "myKey1" // this is the wrong way to declare symbol

    [mySym]:"mykey1" // this is the correct way 
}
// console.log(obj[mySym]);
// console.log(obj);

jsUser.email = "Gurjar@gmail.com"  // if we wanna change our values so we can do easily
// console.log(jsUser);

jsUser.localArea = "Vijay nagar"  // if we wanna add some new key pairs we can do in this way.
// console.log(jsUser);

// if want to lock the object so no one can change the values or key pairs so there is object.freeze

// Object.freeze(jsUser);

jsUser.email = "Batane@gmail.com";
// console.log(jsUser); // we are not able to see any changes in our objects due to Object.freeze

jsUser.greetings = function(){
    console.log("Heyy Nigga's");
}

jsUser.greetings();
console.log(jsUser);

jsUser.greetingsTwo = function(){
    console.log(`my Name is ${this["full name"]}`);
    console.log(`my Name is ${this.email}`);
}

// if apne ko same object ko refer krna h to we can use this.name keyword.
jsUser.greetingsTwo();