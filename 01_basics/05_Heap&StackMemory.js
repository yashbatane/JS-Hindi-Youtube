// +++++++++++++++++++++++++++++++++++++++++++++++++++
                    //  Memory
// Stack (primitive) , Heap (non-primitive/refrence)

//  Stack -> copy krta h memory ko
//  heap -> vo refrence deta h or original value ko bhi change krta h 

//  Exapmle of Stack
let username = "Yash"
let anotherName = username;

anotherName = "Sidd"
console.log(anotherName);
console.log(username);

// Example of Heap

let user1 = {
    gmail :"yash@gmail.com",
    upi : "023@ybl"
}
let user2 = user1;

// console.log(user2.gmail);
 
user2.gmail = "gurjar@gmail.com";
//  isne value change krdi h heap memory me baki stack memory me copy krta h bas 
console.log(user1.gmail);   