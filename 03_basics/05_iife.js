// iife => immediately invoked function expression

// what is iife ?
// when we have to run the function immediately after the defination is called iife (but it is not the proper answer)
// sometimes global scope pollution krte h function ke andar to usse or uske variables se bachne ke liye iife ka use krte h

// SYNTAX : ()() = >(function defination)(function execution of function call)


// Normal Function
function chai(){
    console.log(`DB CONNECTED`);
}
chai();

// IIFE function  (Remember the semicolon of terminate)
(function chai(){
    console.log(`DB CONNECTED`);
})();

// IIFE Fat arrow function
(()=>{
    console.log(`DB CONNECTED TWO`);
})()

// Now when we run the function (DB CONNECTED TWO) it will give you error becoz it it kind of special case so we have to remember the point.

// when we run the 2 IIFE function continuously so we have to add the semicolon to the end of the functions so it can terminate and execute.