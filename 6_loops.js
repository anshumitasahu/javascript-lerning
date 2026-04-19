// let Marks = {
//     harry: 20,
//     ram: 10,
//     kalu: 19,
//     numi: 29,
//     comu: 30,
// }
// for (let can in Marks) {
//     console.log("Marks of " + can + " are " + Marks[can])
// };

// let sum = 0;
// let n = 5;
// for (let i = 0; i <= n; i++) {
//     sum += i;
// }
//  console.log("Sum of the first " + n + " natural numbers is " + sum);

//  let a = 3;
//  let i = 0;
//  while(i<=a) {
//     console.log(i)
//     i++;
//  }
// let a = 2;
// let i = 10;
// do {
//     console.log(i);
//     i++;
// } while (i < a);

// function binodfunc(x, y) {
//     return 1 + (x + y) / 2
// };
// let a = 2;
// let b = 3;
// let c = 4;
// console.log(binodfunc(a,b));
// console.log(binodfunc(b,c));
// console.log(binodfunc(a,c));

// let sum = (p,q) => {
//     return p+q;
// }
// console.log(sum(1,3));

// let cn = 43;
// let i ;
// while (i!= cn) {
//     i = prompt("Enter a number")
// }

// console.log("You have entered th correct number")

console.log("hello")
let name = "anshu\'s";
let food = "mushroom";
let food2 = "     panner    "
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(2,5));
console.log(name.replace("shu", "su"));
console.log(name.concat(" fav food is ", food, ));
console.log(food2.trim());
console.log(food2);
let n = ["ram", "hari", "krushna", "shiv", "pravti", "radha"];
function nameKaran () {
    for (i=0; i < n.length; i++) {
        console.log(n[i])
    }
};
nameKaran();