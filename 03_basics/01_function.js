// function definition
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()
// console.log(typeof sayMyName);

// function addTwonumbers(number1,number2){
//     console.log(number1 + number2);
// }

// addTwonumbers;     // refrence diya h bas abhi
//   output nothing coz we didn't execute we had only give the refrence

// addTwonumbers()   // output Nan

// addTwonumbers(1,4)

// here number1 and number 2 are parameters
function addTwonumbers(number1,number2){ 
    // let result = number1 + number2;
    // return result;

                // OR
        
    return (number1 + number2)
}

// here we give the arguements

addTwonumbers(1,4);  // give nothing coz our function is return the value so for that we have to store in the variable.


let result = addTwonumbers(1,2);
// console.log(result);

// function loginUsernsame(username = "Sam"){
//     return `${username} just logged in`
// }

// console.log(loginUsernsame("Yash"))

// console.log(loginUsernsame());  // giving undefined just logged in, if didn't pass any arguement

function loginUsernsame(username ){
    // if(!username){
    //     console.log("Please enter the username")
    //     return 
    // }

            // or

    if(username===undefined){
        console.log("Please enter the username")
        return 
    }

        return `${username} just logged in`
    }

console.log(loginUsernsame()); 
// console.log(loginUsernsame("Yahs")); 
