let result = document.querySelector(".answer");
let button = document.querySelectorAll("button");
// console.log(button);
let arr = Array.from(button);
// console.log(arr);
let string = ""
arr.forEach((button) => {
    addEventListener("click", (event) => {
        if (event.target.innerHTML == "="){
           string = eval(string);
        result.value = string;
    }

    // string+=event.target.innerHTML;
    // result.value =string;
     
    // console.log(event);
    })
})

// function insert(x) {
//     document.getElementById("result").value += x;
// }
// function insert1() {
//     let a = document.getElementById("result").value;
//     let b = a.slice(0, -1);
//     document.getElementById("result").value = b;
// }

// function insertC() {
//     document.getElementById("result").value = '';
// }

// function insertequal() {
//     let x = document.getElementById("result").value;
//     let y = eval(x);
//     document.getElementById("result").value = y;
// }
