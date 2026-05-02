Num =[1,2,3,4,5,6,7,8,9,10]

// const add_num =Num.map((num)=>(num +10))
// console.log(add_num)

const chaning =Num.map((num)=>(num*10))
                  .map((num)=> num+1)
                  .filter((num)=> num > 40)
console.log(chaning)
