/*Iteration - count elemenst*/


var arr = [1,2,3,4,3,2,1,2,3,4,5,4,3,21,1,2,2,3,4,5,6]
// function numOfTwos(arr, n){
//     var count = 0;
//     for (i = 0; i < arr.length; i++){
//         if (arr[i] === n){
//             count++
//         }
//     }
//     return count
// }
// console.log(numOfTwos(arr, 2))

let countTwo = 0

for (const num of arr){
    if (num === 2){
        countTwo++
    }
}

console.log(countTwo)


//Function assessment practice 1
// result => x days until Chrismas
function xMas(days, holiday){
    console.log(`${days} days until ${holiday}` )
}
  xMas(17, 'Christmas');
  
 
//Fizzbuzz
//Slice
//pyramid function

