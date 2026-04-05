// Arrays

// const arr = [1, 2, 3, 4, 5]
// console.log(arr)
// console.log(typeof arr) // object
// console.log(Array.isArray(arr)) // true

// console.log(arr[0])


// const arry1 = new Array(1,2,3,4,6)
// console.log(arry1)
// console.log(arry1.entries(10))


// Arrays methods 


// arr.push(6) // add element at the end of the array
// // console.log(arr)
// arr.pop() // remove the last element of the array
// // console.log(arr)

// arr.unshift(0) // add element at the beginning of the array
// // console.log(arr)
// arr.shift() // remove the first element of the array

// arr.shift()

// arr = [1, 2, 3, 4, 5]
// console.log(arr.indexOf(3))
// console.log(arr.indexOf(9)) // 2


// const arr  = [1,2,3,5,6,1]

// // console.log(arr , typeof arr)

// // const new_arr = arr.join()
// // console.log(new_arr, typeof new_arr)

// // Slice and splice

// console.log("A " ,arr)

// const sliced_arr = arr.slice(1,4) // slice(start, end) end is not included
// console.log(sliced_arr)


// console.log("B " ,arr)
// const spliced_arr = arr.splice(1,4) // splice(start, deleteCount)
// console.log("c" ,arr)

let arr  = ["Deepak","jaisurya","rohan","ashish"]
let new_arr = ["ironman","captain america", "thor"]

// arr.push(new_arr)

// console.log(arr)

// console.log(arr[4][0]) // ironman

// k = arr.concat(new_arr); // does not change the original array
// console.log(k)

// const all_newheros = [...arr,...new_arr] // spread operator
// console.log(all_newheros)

// const all_newheros2 = [...arr,"hulk",...new_arr] // spread operator
// console.log(all_newheros2)

const another_arr = [1,2,[3,4,5],6,7,[5,[6,5],6]]

const real_another_arr = another_arr.flat(2) // flat() method is used to flatten the array

console.log(real_another_arr)


console.log(Array.isArray("Deepak")) // true

console.log(Array.from("Deepak")) // ['D', 'e', 'e', 'p', 'a', 'k']
console.log(Array.from({name:"Deepak"})) //  


let score1  = 100
let score2 =200
let score3  = 300

console.log(Array.of(score1,score2,score3)) // [100, 200, 300] creates a new array from the given arguments