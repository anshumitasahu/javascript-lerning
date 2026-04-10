// array
let arr = [2, 5, 1, 10];

// accessing values/elements of arr
// value of a index in array = element
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);


// size of a array / lenghth of array]
console.log(arr.length)

// loop 4 times , i starts form 0 to 4
for(i = 0; i < arr.length; i++) {
    
}

// traversing an array
for(i = 0; i < arr.length; i++) {
    console.log(i)
}

// searching
let key = 1;
for(i = 0; i < arr.length; i++) {
    if(key == arr[i]) {
        console.log("found", i);
    }
}

// transfoming
for(i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
}
console.log(arr);


// filterning
for(i = 0; i < arr.length; i++) {
    if(arr[i] % 5 == 0) {
        console.log(arr[i]);
    }
}