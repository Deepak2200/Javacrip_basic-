// const isloginedIn = true;

// if (isloginedIn) {
//     console.log("User is logged in.");
// }

// // if (2 =="2") {
// //     console.log("Condition is true");
// // }
// if (2 === "2") {
//     console.log("Condition is true");
// }else {
//     console.log("Condition is false");
// }


// const score  = 200;

// if(score>100) {
//     const score_check = "Excellent";
//     console.log(`if your score is ${score_check}`)
// }


const balance =1000

// implicit if statement 
// if (balance > 500) console.log("You have sufficient balance");

if (balance<500) {
    console.log("You have insufficient balance");
}else if (balance <750){
    console.log("less then 750");
}else if (balance < 900){
    console.log("less then 900");
}else {
    console.log("You have sufficient balance");
}

const Userbalance = true
const user_card = true
const loginbygoogle =false
const loginbyfacebook = true

if (Userbalance && user_card && balance > 500) 
{console.log("You can make the payment");}

if (loginbygoogle|| loginbyfacebook) {
    console.log("You can login");
}