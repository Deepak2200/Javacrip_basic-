// singleton : Single instance only happen when we use constructor function and we create only one object from that constructor function.

// Object literal

// another way to create an object is using object 
//object.create() 

//other way to create an object is using constructor function
const jsuser ={
    name : "Deepak",
    "Full name" : "Deepak yadav",
    age :22,
    location :"India",
    email : "Deepakindia.com",
    isloggedin : false,
    lastlogin : ["monday","saturday"]
}

// console.log(jsuser.lastlogin)
// console.log(jsuser["lastlogin"])
// // there is two way to access the properties of an object dot notation and bracket notation

// //console.log(jsuser.full name) --> this will not work

// console.log(jsuser["Full name"]) // this will work


// symbol

const sym = Symbol("key1")

const jsuser1 ={
    name : "Deepak",
    "Full name" : "Deepak yadav",
    [sym]: "key1",
    age :22,
    location :"India",
    email : "Deepakindia.com",
    isloggedin : false,
    lastlogin : ["monday","saturday"]
}

// console.log(jsuser1.sym) // this will not work
// console.log(typeof jsuser1.sym) // this will not work
// console.log(jsuser1[sym]) //need to change both place[]

jsuser1.email = "Deepakgpt.com"
// console.log(jsuser1.email)

//  if you want to freeze the object use freeze method 

// Object.freeze(jsuser1) // "o" Object ka "O" should be capital
// console.log(jsuser1)

jsuser1.email = "deepakyadav.com" // this will not work because the object is frozen
// console.log(jsuser1.email) // this will not change because the object is frozen

// console.log(jsuser1)


jsuser1.greeting = function(){
    console.log("Hello my js partner")
}

console.log(jsuser1.greeting)

jsuser1.greeting = function(){
    console.log(`Hello my name is ${this.name}, how are you?`) // this keyword is used to access the properties of the object inside the method
}

console.log(jsuser1.greeting()
)