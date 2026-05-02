

// let i =0
// while (i<=10){
//     console.log(i);
//     i++;
// }

// my_Array  = ['Deepak', 'Rohit', 'Satyarth', 'Shivam', 'Satyarth']

// let j = 0
// while(j<my_Array.length){
//     console.log(my_Array[j]);
//      j = j+1;
// }

// // do -while loop 

// let score = 0
// do {
//     console.log("Your score is " + score);
//     score++;
// } while (score < 5);

//  let k = 0

// do {
//     console.log(k);
//     k++;
// } while (k<=10);


// let a =45
// do{ console.log("Your score is more than 40");
// a++;

// }while(a<=40)


let b = [40,25,63,48,23,48,25,48,63,25]

for (let i = 0; i < b.length; i++) {
    console.log(b[i]);
    do{console.log(`you total score is ${b[i]} + ${b[i++]}`) 
    while (b[i] <= 220)}
}