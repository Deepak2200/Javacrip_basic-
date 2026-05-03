# Digital clock 
``` javascript code 
const clock = document.getElementById('clock');
///document.querySelector("#clock")

// let data =new Date();
// console.log(date.toLocalTimeString())

setInterval(function(){
  let date =new Date();
// console.log(date.toLocaleTimeString())
clock.innerHTML =date.toLocaleTimeString()
},1000);```