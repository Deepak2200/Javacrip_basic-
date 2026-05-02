// // // for of

// // let arr = [1, 2, 3, 4, 5];

// // for (let num of arr) {
// //     console.log(num);
// // }

// // let greet = "Hello, World!";
// // for(let char of greet) {

// //     console.log(`string word ${char}`)
// //     if (char == " ")
// //         break;
// // }


// // Maps 

// let map = new Map();
// map.set( "in","india");
// map.set("us","united states");
// map.set("uk","united kingdom");
// map.set("fr","france");
// map.set( "in","india");

// console.log(map);

// for (let key of map.keys()) {
//     // console.log(`key is ${key}`);
// }

// for (let [key ,value] of map)
//     // console.log(key,":-",value);}


// const myobj = {
//     game1:"cricket",
//     game2:"football",
//     game3:"hockey"
// }

// for(let [key, values] of myobj){
//     console.log(key,":-",values)
// }

// for in 

const myobj = {
    js : "javascript",
    py : "python",
    java : "java"
}

for(let key in myobj){
    console.log(key,":-",myobj[key])
    console.log(key)
}

let list = ["js","py","java"];
for (let key in list){
    console.log(key)
console.log(list[key])}