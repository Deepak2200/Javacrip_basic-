// const tinderuser = new Object() // this is the constructor function to create an object

// const tinderuser = {} // this is the object literal to create an object

// tinderuser.name = "Deepak"
// tinderuser.age = 22
// tinderuser.isloggedin = false
// console.log(tinderuser) // this will print an empty object



const jsuser ={
    name : "Deepak",
    Full_name : "Deepak yadav",
    age :22,
    location :"India",
    bio :{
        Profile : "Software developer",
        experience : "2 years",
        objective_1 :{slogan :  "To be the best software developer in the world"}
    }
    }



// console.log(jsuser.Full_name)
// console.log(jsuser.bio)
// console.log(jsuser.bio.objective_1.slogan)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"b", 4:"c"}

// const obj3 = {obj1 , obj2} // this is the spread operator to merge two objects

//  const obj3 = Object.assign( {} ,obj1, obj2) 
 // this is the Object.assign() method to merge two objects

 const obj3 ={...obj1,...obj2} // this is the spread operator to merge two objects
//  console.log(obj3)

 console.log(Object.keys(jsuser)) // this will return the keys of the object
 console.log(Object.values(jsuser)) // this will return the values of the object
//  \console.log(Object.entries(jsuser)) // this will return the key-value pairs of the object in an array

 console.log(jsuser.hasOwnProperty("name")) // this will return true if the object has the property "name"
 console.log(jsuser.hasOwnProperty("email")) // this will return false if the object does not have the property "email"