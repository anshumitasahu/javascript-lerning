let a = [1, 3, 2, 77, 4, 5]
let max = a[0];

for (i = 0; i < a.lenght; i++) {
    console.log("working");
    console.log(max < a[i]);
    if (max < a[i]) {
        max = a[i]
        console.log(max)
    }
}

console.log(max);