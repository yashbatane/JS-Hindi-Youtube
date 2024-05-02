//  {this} keyword is used for current context refrence

const user={
    userName : "yash",
    age : 19,
    userMessage : function(){
        console.log(`${this.userName} is a student and his age is 19`);
        console.log(this);
    }
}

//  In fuction we used ${this.username} so it takes the refrence of current context as we seen in function apan ne userName : "Yash" diya h to usne current context ko liya h 

//  but out of the function we used userName : dam to usne current context me dam liya h 

// user.userMessage();
user.userName = "dam"
// user.userMessage();



// console.log(this);  //output : {} (gives the window context)

// function chai(){
//     let userName = "Yaash"
//     console.log(this.userName)
// }  // here {this} is not working in fuction it gives the output undefined

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// } // here also {this} is not working in fuction it gives the output undefined

// chai()



//+++++++++++++++++++Fat arrow Function+++++++++++++++ 
//  () => {}

const chai = () => {
    let userName = "Yash"
    console.log(this);
}

// const addTwo = (num1, num2) => {
    //     return num1 + num2
// }


//  when we have single line of code and we have to return the function so we can directly return the value there is no need to write return keyword
// const addTwo = (num1, num2) =>  num1 + num2
    

//  we can use braces() also
// const addTwo = (num1, num2) => ( num1 + num2 )
    

// for object we have to use curly braces as normal we are useing to write objects but mske sure that it is inside the braces ()
const addTwo = (num1, num2) => ({username: "hitesh"})
    
    
console.log(addTwo(3, 4))