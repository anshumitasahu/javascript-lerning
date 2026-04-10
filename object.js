let obj = {
    key: "value",
    something: 1,
    print: (a) => {
        console.log(a);
    }
}

// 
obj.print("ssomethig")


let Animal = {
    name: "Dog",
    family: "Dogesh",
    speak: () => {
        console.log("bau bau")
    }
}

Animal.speak()
console.log(Animal.name);


let arrObj = [
    {
        name: "rutu",
        makrs : 100
    },
    {
        name: "sutu",
        makrs : 100
    },
    {
        name: "mutu",
        makrs : 30
    },
    {
        name: "gutu",
        makrs : 71
    },
    {
        name: "lutu",
        makrs : 80
    },
]

for(i = 0; i< arrObj.length; i++) {
    let passingMarks = 33;
    if (passingMarks <= arrObj[i].makrs) {
        console.log(arrObj[i].name);
    }
}