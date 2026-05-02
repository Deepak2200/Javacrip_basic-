
// var c =500;

// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// // console.log(a)
// // console.log(b)
// console.log(c)


// let a = 500;

// if (true) {
//     let a= 20;
//     console.log("innder block", a)
// }
// console.log("outside block", a)


function one(){
    const username  = "Deepak";

    function two(){
        const website = "www.google.com";
        console.log(username);
        
    }
    // console.log(website);

    two()
}

one()

if (true) {
    const username ="Deepak"
    if ( true) {
        const website = "www.google.com";
        // console.log(username + " " + website);
         }
        // console.log(website);
}

// console.log(username)

// --------------Insteresting Fact-------------

function addone(num){
    let add_one  = num + 1;
    return add_one;
    console.log("This will never execute")
}

let result_of_fuction  =  addone(115)
console.log(result_of_fuction)


const addtwo = function(num1){
    return num1 +2
}

addtwo(10)
console.log(addtwo(10))

// other way
const addthree = (num) => {
    return num + 3;
};
console.log(addthree(10));