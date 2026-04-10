//1.  basic increment
// let n = 5 // input

// for (i = 1; i <= n; i++) {
//     console.log(i)
// }

// 2. reverse countdown
// let n=5;

// for (i = 5; i >= 1; i--) {
//     console.log(i)
// }

// 3. Even numbers only
// let n=10;

// for(i = 2; i <= n; i +=2) {
//     console.log(i)
// }

// 4. Sum of First N Numbers 
// let n=5;
// let sum=0;

//  for (i = 0; i <= n; i++) {
//      sum = sum + i
//  }

//  console.log(sum);

// 5. Multiplication Table 
// let x=3;

// for(i = 1; i <= 10; i++) {
//     console.log(i * x)
// }

// 6. Factorial Calculation

// let n=4;
// let result=1;

// for(i = 1; i <= n; i++) {
//     result = result * i
// }

// console.log(result)

// Powers
// let n=3;
// let m=3;
// let ans = 1;
// for (i = 1; i <= m; i++) {
//     ans = ans * n;
// }
// console.log(ans);

// 7. powers of two 
// let n = 4;
// let m = 2
// let result = 1;

// for(i = 1; i <= n; i++) {
//     result = result * m;
//     console.log(result);
// }

// 8. FizzBuzz
// let n = 15;

// for(i = 1; i <= n; i++) {
//     if(i%3 == 0 && i%5 == 0) {
//         console.log("FizzBuzz")
//     } else if(i%3 == 0) {
//         console.log("Fizz")
//     } else if(i%5 == 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

//9. Number Square Series
// let n = 5;
// let result = 1;

// for (i = 1; i <= n; i++) {
//     result = i * i;
//     console.log(result)
// }

// 10. Divisibility Skip
// for (i =1; i <= 20; i++) {
//     if(i%4 == 0) {
//         continue;
//     } else {
//         console.log(i)
//     }
// }

// 1. The Basic Reverse
// let n = 1234;

// for(;n > 0; n = Math.floor(n/10)) {
//     let digit = n%10;
//     console.log(digit);
// }


// 2. Reconstruct the Number 
// let n = 567;
// let reversed = 0;

// for(; n > 0; n= Math.floor(n/10)) {
//     let digit= n%10;
//     reversed = (reversed * 10) + digit;
// }
// console.log (reversed);

// 3. The Palidrome Check
// let n = 123;
// let reverse = 0;
// let original = n;

// for (; n > 0; n = Math.floor(n/10)) {
//     let digit = n%10;
//     reverse = (reverse * 10) + digit;
// }
//  if (original === reverse) {
//         console.log("True")
//     } else {
//         console.log("False")
//     }

// 4. Sum Of Digits :
// let sum = 0;
// let n = 246;
//  for(; n > 0; n = Math.floor(n/10)) {
//     let digit = n%10;
//     sum = sum + digit;
//  }
//  console.log(sum);

// 5. Control Specific Digit
// let n = 5052;
// let count = 0;

// for (; n > 0; n = Math.floor(n/10)) {
//     let digit = n%10;
//     if (digit == 5){
//         count = count + 1;
//     }
// }
// console.log(count)

// 1 to 10 ten times
// let n = 10;
// for (i = 1; i <= n; i++) {
//     for(a = 1; a <= n; a++) {
//         console.log(i)
//     }
// }

// // 1. square pattern
// let n = 5;

// for(i = 1; i <= n; i++) {
//     let output = "";
//     for (j = 1; j <= n; j++) {
//        output += "*"
//     }
//     console.log(output)
// }

// // 2. Right anglrd triangle
// let n = 5;
// for(i = 1; i <= n; i++) {
//     let output = "";
//     for(j = 1; j <= i; j++) {
//         output += "*";
//     }
//     console.log(output)
// }

// // 3. Inverted right angled triangle
// let n = 5;
// for(i = n; i >= 1; i--) {
//     let output = "";
//     for(j = 1; j <= i; j++) {
//         output += "*";
//     }
//     console.log(output)
// }

// // 4. sequenttial number triangle
// let n = 5;
// for(i = 1; i <= n; i++) {
//     let output = "";
//     for(j = 1; j <= i; j++) {
//         output = output+i ;
//     }
//     console.log(output)
// }

// 5. Floyd's Triangle
// let n = 4;
// let m = 1;
// for(i = 1; i <= n; i++) {
//     let output = "";
//     for(j = 1; j <= i; j++){
//         output += m + " ";
//         m = m + 1;
//     }
//     console.log(output);
// }

// 6. Reverse Floyd's Triangle
let n = 5;
for( i = 1; i <= n; i++) {
    let output = "";
    for(j = i; j >= 1; j--){
        output += j + " ";
    }
    console.log(output);
}