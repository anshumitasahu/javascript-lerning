// 1. find minimum and maximum
// let a = [1, 3, 2, 77, 4, 5]
// let max = 0;

// for (let i = 0; i < a.length; i++) {
//     if (max < a[i]) {
//         max = a[i]
//     }
// }
// console.log(max);


// let min = 999;

// for(i = 0; i < a.length; i++) {
//     if (min > a[i]) {
//         min = a[i]
//     }
// }
// console.log(min);

//  2. Find existance
// let array = ["manisa khiya", 2, "haladi", 88, 5, "pujari babu", "gonda"]
// let existance = "pujari baba";

// for(i = 0; i < array.length; i++) {
//     if (array[i] == existance) {
//         console.log("found", i )
//         break;
//     }

//     if(i == array.length -1) {
//         console.log("not found");
//     }
// }

// 3. Sum of all the elements in array

let array = [1, 2, 3];
let sum = 0 ;

for(i = 0; i < array.length; i++) {
    sum = sum + array[i]
}
console.log(sum)