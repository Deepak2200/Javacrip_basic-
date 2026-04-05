// const user_details ={
//     name : "deepak",
//     price : 100,
//     welcome_message : function(){
//      console.log(`${this.name} welcome to our website`)
//     }

// } 

// // user_details.welcome_message()
// // console.log(user_details)
// // user_details.name = "Rahul"
// // user_details.welcome_message()
// // console.log(user_details)

// // console.log(this)

// // function chai (){
// //     console.log(this)   
// // }

// // chai()

// const chai = () => {
//     user = "Deepak"
//     console.log(this.user)
// }

// chai()

// // Arrow fuction donation ()=> {}

// let add_values =(a,b) => {
//     return a+b;
// }

// console.log(add_values(10,20))

// // Implicite return 

// let add_values_2 =(a,b) =>  a+b;

// console.log(add_values_2(10,20))


// const arrow_check = (num1, num2) => ({user: "Deepka"});

// console.log(arrow_check(10,20))

// my_arry = [1,2,3,4,5]


// Immediately invoked function expression (IIFE)
// only use brakets() on entirefuction after that one more () for invoking the function

// nornmal function 
// function chai_Code(){
//     console.log(`Db connected`)
// }

// chai_Code()

// IIFE
(function Deepak(){
    console.log(`Db connected`);
})();

// to avoid polluting the global scope we can use IIFE


(() => {
    console.log(`arrow fuction connected`)
}) ();

((name) => {
    console.log(`arrow fuction connected ${name}`)
}) ("Deepak");