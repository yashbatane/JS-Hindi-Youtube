function calculateCartPrice(num1){
    return num1;
}

// console.log(calculateCartPrice(3,6,2))


// Rest operator (...)

// rest or spread operator are same it depends on the use case
// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(1,2,3,4));

function calculateCartPrice(val1, val2 , ...num1){
    return num1;
}

// console.log(calculateCartPrice(1,2,3,4));

const user = {
    username : "Yash", 
    price : 3445
}

function handleObjects(anyObjects){
    console.log(`${anyObjects.username} and the price is ${anyObjects.price}`)
}

handleObjects(user);

//  OR

handleObjects({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));