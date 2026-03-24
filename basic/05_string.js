const name = 'deepak'
const channel = "tehnorthstar"


console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(0,4));
console.log(name[0]);
console.log(name.charAt(2));
console.log(name.indexOf('e'));
 
let charector = "   Deepak   "
console.log(charector.trim());

let url = "https://www.youtube.com/tehnorthstar"
console.log(url.replace('https://www.',''));

let url1 = "https:/ www.youtube.com tehnorthstar"
console.log(url1.replaceAll(' ','/'));


console.log(url.includes('youtube'));

console.log(url.includes('youtube1'));

console.log(url.split('/'));