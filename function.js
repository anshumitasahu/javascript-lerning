// void fun - fun without return
function name(a, b, c) {
    console.log(a, b, c);
}

// function add(a, b) {
//     console.log(a+b);
// }


// function with return 
function add(a, b) {
    let sum = a+b
    return sum
}

let sum = add(1, 2);
console.log(sum);

function print(something) {
    console.log(something)
}

const print = (st) => {
    console.log(st)
}

print("sldkfjlsdkfj")



// wtie a function to find the sum of all the ele in an arr
function arrSum(arr) {
    let sum = 0;
    for(i = 0; i<arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

let someBloddyArr = [1, 2, 3,4 , 5]

console.log(arrSum(someBloddyArr));
console.log(arrSum(someBloddyArr));
console.log(arrSum(someBloddyArr));
console.log(arrSum(someBloddyArr));
console.log(arrSum(someBloddyArr));
console.log(arrSum(someBloddyArr));