const btnElement = document.querySelector("button");
const divElement = document.querySelector("div");

console.log(btnElement)

btnElement.onclick = () => {
    divElement.innerHTML = `
        dont click just because that's a button. rasist.
    `

    alert("you were thinking about a number 5");
}


let dict = [
    {
        word: "kumi",
        mean: "kumi san you bloody guy"
    },
    {
        word: "bread",
        mean: "bread san you bloody guy"
    },
    {
        word: "coco",
        mean: "coco san you bloody guy"
    },
    {
        word: "late",
        mean: "late san you bloody guy"
    }
]

const inputElement = document.querySelector("input");
const resultDiv = document.querySelector(".result");

const searchBtn = document.querySelector("#search");

searchBtn.onclick = () => {
    let inputVal = inputElement.value;

    for (i = 0; i < dict.length; i++) {
        if (inputVal == dict[i].word) {
            resultDiv.innerHTML = `meaning - ${dict[i].mean}`;
        }

        if (i == dict.length - 1) {
            resultDiv.innerHTML = `
            <a href="https://www.google.com/search?q=${inputVal}"> i dont know, but click me you will know </a>
            `;
        }
    }
}