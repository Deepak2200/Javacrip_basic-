const num  =[1,2,3,4,5,6]

// const redu = num.reduce(function(acc,currvall){
//     console.log(`acc ${acc} and currvall ${currvall}`)
//     return acc+ currvall
// },10)

// console.log(redu)

const redu1 =num.reduce((acc,crl)=>acc +crl ,0)
console.log(redu1)


const shopping = [
    {
        item_name :"Js_course",
        price: 3999
    },
    {
        item_name :"python_course",
        price: 4999
    },
    {
        item_name :"react_course",
        price: 1999
    }
]
const price_to_pay = shopping.reduce((acc,item) =>acc+item.price,0)

console.log(price_to_pay)

