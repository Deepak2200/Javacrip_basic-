let coding = ["js","py","java"];

// coding.forEach(function(value,index){
//     console.log(`index is ${index} and value is ${value}`)
// })

// console.log(coding.values())

// let cal = [1,2,3,4,5,6,7,8,9,10];

// cal.forEach(function(value){
//     if (value%2==0){
//         console.log(`value is ${value} and it is even`)
//     }else {
//     console.log(`value is ${value} and it is odd`)
//  }
//     console.log(`value is ${value} `)
// }) 

function printme(item){
    // console.log(`value is ${item}`) 
}

coding.forEach(printme)


const num_obj ={
    name : " Deepak",
    age : 24,
    city : "Delhi"
}

for (let key in num_obj){
    // console.log(`key is ${key} and value is ${num_obj[key]}`)
}

const programming = {
    language : "js",
    framework : "react",
    library : "redux"
}

for (let key in programming){
    // console.log(`key is ${key} and value is ${programming[key]}`)
}


const my_obj = [{},{},
    {name : "Deepak",
    age : 24,
    city : "Delhi"}

]

my_obj.forEach((item) => {
    // console.log(`name is ${item.name} and age is ${item.age} and city is ${item.city}`)
    })


const lag =  ["js","py","java","c++","c#"]
const values = lag.forEach((item)=>{
    console.log(`value is ${item}`)
})

// console.log(values)

const num = [1,2,3,4,5,6,7,8,9,10]

//way 1
// const fil_num=num.filter((number) => (number>4))
// console.log(fil_num)

//way 2
const fil_num=num.filter((number) => {
    return number>4})
console.log(fil_num)

//way 3 with for_each 
const new_num=[]

num.forEach((num)=>{
    if (num>4){
        new_num.push(num)
    }
})
console.log(new_num)


const book = [
    {tital : "Do your best" ,gener :"ashok ", established : 1989,published:2005},
    {tital : "astro best" ,gener :"ashok ", established : 1990,published:2006},
    {tital : "make it best" ,gener :"Deepak", established : 1935,published:2007},
    {tital : " best" ,gener :"Deepak", established : 1999,published:2010}
]

const book_info = book.filter((bk)=>bk.gener === "Deepak")
console.log(book_info)

const book_date  = book.filter((bk)=>{
    return bk.published>2008 && bk.gener==="Deepak" 
})
console.log(book_date)