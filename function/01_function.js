// function saymyname (){
//     console.log("De");
//     console.log("ep");
//     console.log("ak");
// }

// //saymyname()


// function sum(a,b){
//     console.log(a+b);
// }

// //sum(10,20)


// function score(subject1, subject2, subject3){
//     console.log(subject1 + subject2 + subject3);
// }

// score(10,20,30)

// function Details(name){
//     return `this is you name ${name}`
// }

// Details("Deepak") // this will not print anything because we are not using console.log to print the return value of the function

// //console.log(Details("Deepak")) // this will print the return value of the function Details


// function info_1(name){
//     if (name === undefined){
//         return "please provide a name"
//     } 
//     return `this is your name ${name}`
// }

// console.log(info_1()) // this will print "please provide a name" because we are not providing any argument to the function

// console.log(info_1("Deepak")) // this will print "this is your name Deepak" because we are providing an argument to the function


// function calculatecarprice(num1){
//     return num1
// }

// console.log(calculatecarprice(10000))


// function calculatecarprice(...num1){
//     return num1
// }

// console.log(calculatecarprice(10,20,30))

function calculatecarprice(val1, va2,...num1){
    return num1
}

console.log(calculatecarprice(10,20,30,40,50))

const user = {
    name : "Deepak",
   price : 999
}

function handleobject(anyobject){
    console.log(`this is the name of the course ${anyobject.name} and the price of the course is ${anyobject.price}`)
}

//handleobject(user) // this will not print anything because we are not using console.log to print the return value of the function

handleobject(
    {name : "javascript_basic",
price : 999
}
)