const sumbtn = document.querySelector("#sum");
// sumbtn.addEventListener("click",()=>{
//     const olddata =  document.getElementById("result").innerHTML;
//     document.getElementById("result").innerHTML=olddata+(2+2);
// })
sumbtn.addEventListener("click",()=>{
    let num1 = prompt("Enter number 1","0");
    let num2 = prompt("Enter number 2","0");
    let result = `sum of ${num1},${num2} is = ${parseInt(num1)+parseInt(num2)}`;
    // const olddata =  document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=result;
})