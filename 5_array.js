// let panda = ["black", "white", "blue", "red", "rangin"];

// // console.log(panda);

// // console.log(panda[0])
// // console.log(panda[1])
// // console.log(panda[2])

// // console.log(panda.length)

// for(i = 0; i < panda.length; i++) {
//     console.log(panda[i]);
// }


// let num = [1, 34, 56, 23, 76, 21, 41];
// let num_more = [28, 33,22,11, 10];
// let num_even_more = [222, 252, 266, 843, 292, 112, 456]
// let b = num.toString();
// console.log(b, typeof b);
// let c = num.join(" and ");
// console.log(c, typeof c);
// // let r = num.pop() 
// console.log(num, r);
// let t = num.push(56) 
// console.log(num, t);
// let s = num.shift();
// console.log(s, num);
// let u = num.unshift(78);
// console.log(u, num);
// console.log(num.length);
// delete num[0];
// console.log(num.length);
// console.log(num);

// let newArray =  num.concat(num_more, num_even_more);
// console.log(newArray);
// console.log(num, num_more, num_even_more);

// sort method
// let compare = (a, b) => {
//     return a - b
// }
// num.sort(compare)
// console.log(num);
// num_more.sort(compare)
// console.log(num_more);
// num_even_more.reverse()
// console.log(num_even_more);

// splice and slice
// let deletedValues = num.splice(2, 5, 111, 112, 121, 113);
// console.log(num);
// console.log(deletedValues);
// let newNum = num.slice(4 , 6)
// console.log(newNum);  ??

// let name = "Anshu";
// let arr = Array.from(name);
// console.log(arr);

// practice question
// let arr= [1, 2, 3, 4, 5, 6, 7, 8 ,9 , 10]
// let = prompt("Enter your number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr);

// q1
let color = ["Green", "Yellow", "Pink"];
console.log(color[0]);

// q2
let num = [11, 22, 33, 44, 55];
console.log(num[num.length - 1]);

// q3
let arr = ["a", "b", "c"];
arr[1] = "z";
console.log(arr);

// q4
let fruits = ["apple", "banana"];
fruits[2] = "grapes";
console.log(fruits);

// q5
let nums = [1, 2, 3, 4];
for(i = 0; i < nums.length; i++) {
    console.log (nums[i]);
};