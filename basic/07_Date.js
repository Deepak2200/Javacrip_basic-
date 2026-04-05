// previous style
let date = new Date();
// console.log(date)
// console.log(date.getFullYear())
// console.log(date.toDateString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.toJSON())
// console.log(date.toISOString())
// console.log(date.toString())
// console.log(typeof date)

// let newdate =new Date("2026,01,25")
// console.log(newdate)

// str_newdate = String(newdate)
// console.log(str_newdate)
// console.log(temporal.now)

// let newstr = new Date("2025-02-10")
// console.log(newstr.toLocaleString())

// let newstr1 = new Date("10-02-2025")
// console.log(newstr1.toLocaleString())

//  timestemp :- jab hum quezzes or fast and asnwers me date ko store karte hai to usko timestamp me convert karte hai taki hum usko easily compare kar sake ki konsa date bada hai konsa chota hai

// let date1 = Date.now()
// console.log(date1)

// console.log(newstr.getTime())

// console.log(Date.now())
// console.log(Math.floor(Date.now()/1000)) // 1 second = 1000 millisecond


let newdate = new Date()
console.log(newdate)
console.log(newdate.getTime())
console.log(newdate.getMonth())

let k = newdate.toLocaleString('default', { month: 'long', timeZone: 'UTC' }) 
console.log(k)