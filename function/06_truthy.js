const user = []

if (user) {
    console.log("User is logged in");
}else{
    console.log("User is not logged in");
}

// falsy values: 0, "", null, undefined, NaN, false

// truthy values: all values except falsy values are truthy values


const user1 = []

if (user1.length === 0) {
    console.log("this is an empty array");
}

const user2 = {}

if(Object.keys(user2).length===0){
    console.log("this is an empty object");
}


// Nullience coalesing operator (??) :  it is used to provide a default value when the left-hand side operand is null or undefined.

let val1;
// val1 = 5 ?? 10;
// val1 = undefined ?? 20;
// val1 = null ?? 10;

val1 = undefined ?? "a" ??15;
console.log(val1)

// Ternary operator: it is a shorthand for an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.

// condition ? value_if_true : value_if_false

const tea_price = 100

tea_price > 50 ?console.log("Expensive") : console.log("Affordable");