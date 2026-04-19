// const sayHello = function () {
//     return "Hello World!";
// };
// console.log(sayHello())


// const add = function (a, b) {
//     return a + b;
// }
// let x = add(1,5);
// console.log(x);


// let z = 6;
// const evenodd = function () {
//     if(z%2 === 0) {
//         console.log("even");
//     } else {
//         console.log("odd");
//     };
// };
// evenodd(z); 

// let Celsius = 50;
// const ftoc = function (Celsius) {
//     return (Celsius * 9/5) + 32;
// }
// console.log (ftoc(Celsius))

// let radius = 12;
// const area = function (radius) {
//     return ((22/7) * (radius * radius))
// }
// console.log (area(radius))

// // array:
// let numbers = [1, 35, 22, 100, 26, 991, 10];
// let max = numbers[0];
// for (i = 0; i < numbers.length; i++) {
//     if (max < numbers[i]) {
//         max = numbers[i]
//     }
// }
// console.log(max)

// let nums = [1, 2, 3, 4, 5];
// let sum = 0 ;
// for (i = 0; i < nums.length; i++) {
//     sum = sum + nums[i];
// }
// console.log(sum);


// let arry = [1, 2, 3];
// for (i = 0; i < arry.length; i++) {
//     arry[i] = arry[i] * arry[i];
// }
// console.log(arry);

// // objects
// const student = {
//     name: "Ram", 
//     class: 12,
//     rollNo: 21
// };
// console.log(student);

// let books = [
//     {   
//         title: "What The Young India Wants",
//         author: "Cheetan Bhagat",
//         bookStatus: "completed",
//     },
//     {
//         title: "India of My Dreams",
//         author: "Mahatma Gandhi",
//         bookStatus: "yet to complete",
//     },
//     {
//         title: "Wings Of Fire",
//         author: "Dr. A. P. J. Abdul Kalam",
//         bookStatus: "yet to complete",
//     },
//     {
//         title: "The Inheritance Of Loss",
//         author: "Kiran Desai",
//         bookStatus: "yet to complete",
//     },
// ];
// for ( i = 0; i < books.length; i++) {
//     if (books[i].bookStatus === "completed") {
//         console.log(books[i].title + " by " + books[i].author + " is been completely read")
//     } else {
//         console.log(books[i].title + " by " +books[i].author + " is yet to complete")
//     }
// };

// function sayHello2World() {
//     console.log("Hello World!")
// }

// sayHello2World();

// function sayHello(name) {
//     console.log("hello" + name);
// }
// sayHello (" Anshu");

// #task1:
function greet(hello) {
    console.log("Good " + hello);
}
greet("Morning");

// #task2:
function square(num) {
    console.log(num * num);
}
square(5);

// #task3 : 
function sayBigger(a, b) {
    if (a < b) {
        console.log("b is bigger " + b);
    } else if (a > b) {
        console.log("a is bigger " + a);
    }
}

sayBigger(1, 2);


// Q1:
function sayHello() {
    console.log("Hello World");
}
sayHello();

// Q2;
function print(num) {
    console.log("Number is: " + num);
}
print(5);

// Q3:
function evenOdd(number) {
    if (number % 2 == 0) {
        console.log("Even " + number)
    } else if (number % 2 !== 0) {
        console.log("Odd " + number)
    } else {
        console.log("Not A Number")
    }
}
evenOdd(8);

// Q4:
function input(numb) {
    if (numb > 0) {
        console.log("Positive: " + numb)
    } else if (numb < 0 && numb !== 0) {
        console.log("Negative: " + numb)
    } else if (numb == 0) {
        console.log("Zero: " + numb)
    }
};
input(583);

// Q5 
function addSub(a, b) {
    console.log("Sum is: " + a + b);
    console.log("Difference is: " + (a - b))
};
addSub(5, 2);

// Q6: 
// let arry = [1, 3, 2];
// let max = 0;
// function bigGuy() {
//     for (i = 0; i <= arry.length; i++) {
//         if (max < arry[i]) {
//             max == arry[i];
//         }
//     }
//     console.log(arry[i]);
// };
// bigGuy(max);


function bigGuy(a, b, c) {
    if (a < b && b < c) {
        console.log("Biggest among all is: " + c)
    } else if (a < b && b > c) {
        console.log("Bigger number among all is: " + b)
    } else if (a > b && b > c) {
        console.log("Bigger number among all is: " + a)
    } else if (a > b && b < c && a > c) {
        console.log("Bigger among all the number is: " + a)
    } else if (a > b && b < c && a < c) {
        console.log("Bigger number among all is: " + c)
    }
}
bigGuy(1, 23, 12);

// Q7 :
function multiplication(a) {
    for (i = 0; i <= 5; i++) {
        let product = a * i
        console.log(a + " ✕ " + i + " = " + product)
    }
}
multiplication(2);

// Q8:
function factorial(x) {
    let result=1;
for (i= 1; i<=x ; i++ ){
    result = result * i;
}
console.log("factorial of " + x + " is " + result)
}
factorial(5);


// day 2:

// Q1: Print 1 to 10 using loops
// function 