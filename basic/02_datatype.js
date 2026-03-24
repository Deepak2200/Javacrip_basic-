"use strict"; // treat all js code as newer version

// alert("Hi"); // we are using node js 

let name = "Deepak"
let age = 25
let isloggedin = false
let state;
let value = null


// number =>2 to power 53
//biginit  
// boolean => true or false
// null => empty value (stand alone value)
// undefined => variable is declared but not assigned a value
// symbol => unique identifier (react) jab hum unique kibaat karate hai
// object 

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof value);
// console.log(typeof state);


// premative data type => number, string, boolean, null, undefined,bigint, symbol: kisi bhi value ko unique bnane ke liye use kiya jata hai

//non-primitive/reference data type => array, object literals, functions, dates



const score = 100
const scoreValue = 100.1

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId) // false because symbol is unique

const bigNummber = 9659966541n; //n represnt the big integer

const heros= ["shaktiman", "doga", "batman", "superman"]
let objt ={
    name :"Deepak",
    age :25,
    email : "deepak.y@tehnorthstar.com"
}

// const myfuction = functions()
// {
//     console.log("hello world");
// }

console.log(typeof heros);
console.log(typeof bigNummber);
console.log(typeof id);


//++++++++++++++++++++++++++++++++++++++++++++++++++


// stack memory (Primitive) , Heap memory (non-primitive) 

let myName = "Deepak"

let anothername = myName
anothername = "Yadav ji "

console.log(myName);
console.log(anothername);

let user1 = {
    name : "Deepak",
    upi : "deepak@ybl"
}

let user2 = user1

user2.email="deepak.y@tehnorthstar.com"

console.log(user1);
console.log(user2);
console.log(user1.email);
console.log(user2.email);
