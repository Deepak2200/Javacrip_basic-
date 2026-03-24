const score = 100;
// console.log(score) // 100

const balance  = new Number(100)
// console.log(balance) // [Number: 100]

// console.log(balance.toString().length) // 3
// console.log(balance.toString()[2]) // 1
// console.log(balance.toFixed(2))

const othernum = 25.23
// console.log(othernum.toPrecision(3)) // 25.2
// console.log(othernum.toPrecision(2))

const othernum2 = 101225.23
// console.log(othernum2.toPrecision(5))

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-in')) // 100,000


// Math Object  +++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-5))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.1))
// console.log(Math.floor(4.9))
// console.log(Math.sqrt(25))

console.log(Math.random())  // always be in 0-1
console.log((Math.random()*10) +1)


min  = 10
max = 20

console.log(Math.floor(Math.random()*(max-min) + min))
