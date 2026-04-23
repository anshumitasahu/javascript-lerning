// const btnElement = document.querySelector("button");
// const divElement = document.querySelector("div");

// console.log(btnElement)

// btnElement.onclick = () => {
//     divElement.innerHTML = `
//         dont click just because that's a button. rasist.
//     `

//     alert("you were thinking about a number 5");
// }


// let dict = [
//     {
//         word: "kumi",
//         mean: "kumi san you bloody guy"
//     },
//     {
//         word: "bread",
//         mean: "bread san you bloody guy"
//     },
//     {
//         word: "coco",
//         mean: "coco san you bloody guy"
//     },
//     {
//         word: "late",
//         mean: "late san you bloody guy"
//     }
// ]

// const inputElement = document.querySelector("input");
// const resultDiv = document.querySelector(".result");

// const searchBtn = document.querySelector("#search");

// searchBtn.onclick = () => {
//     let inputVal = inputElement.value;

//     for (i = 0; i < dict.length; i++) {
//         if (inputVal == dict[i].word) {
//             resultDiv.innerHTML = `meaning - ${dict[i].mean}`;
//         }

//         if (i == dict.length - 1) {
//             resultDiv.innerHTML = `
//             <a href="https://www.google.com/search?q=${inputVal}"> i dont know, but click me you will know </a>
//             `;
//         }
//     }1
// // }
// let first = document.getElementById("first");
// let a = first.getAttribute("class");
// console.log(a);
// console.log(first.hasAttribute("class"));
// console.log(first.hasAttribute("style"));
// // first.setAttribute("hidden", "true sachin");
// // first.removeAttribute("class");
// console.log(first.attributes);

// let a = document.getElementsByClassName("elem")[0]
// a.innerHTML = a.innerHTML + `<h1>Hello</h1>`;

// let div= document.createElement(`div`);
// div.innerHTML = "hello there";
// a.appendChild(div);
// console.log (a.classList);
// a.classList.remove("kelem");
// console.log (a.classList);
// a.classList.add("kelem");
// alert("hello");
// let t = setTimeout(function () { alert("mememmeememmemmememememe")}, 5000);
// let s = prompt("do you want the reply")
// if ("n" == s) {
//    clearTimeout(t); 
// }
// console.log(t);
// const result = (x, y, z) => {
    // let sum = x + y + z;
    // console.log(sum);
// }
// setTimeout(result, 2000, 1, 2, 4);
// setInterval(result, 2000, 1, 2, 4);
// document.getElementById("google").addEventListener("click", function() {
//     let url = "https://www.google.com/search?q=javascript";
//     let win = window.open(url, "", "width=500,height=500,scrollbars=yes,resize=yes")
// })
// document.getElementById("x").addEventListener("click", function() {
//     let url = "https://x.com/home";
//     let win = window.open(url, "", "width=500,height=500,scrollbars=yes,resize=yes")
// })
let a = document.querySelector("#bulb")
setInterval(async function() {
    document.querySelector("#bulb").classList.toggle("bulb")
}, 500)
console.log(a.classList)
a.classList.remove("bulb")
console.log(a.classList)