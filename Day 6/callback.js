// CallBack
// const sum=(num1,num2)=>{
//     return "sum = " + (num1+num2);
// }
// const print = (msg)=>{
//     console.log(msg);
// }
// let msg = sum(20,30);
// print(msg);

// const sum=(num1,num2)=>{
//     print("sum = " + (num1+num2));
// }
// const print = (msg)=>{
//     console.log(msg);
// }
// sum(20,30);

// const sum=(num1,num2,print)=>{
//     let s=num1+num2;
//     print("sum = " + s);
// }
// const print = (msg)=>{
//     console.log(msg);
// }
// sum(20,30,print);

// Sum = Higher order Function 
// Function jo as a parameter bhi use ho jaye as a variable bhi use ho jaye unhe High Class function khte hai jaise agar hum sum function ko kisi dusre function me as a callback pass kr de to bo high class function hai.
const sum=(num1,num2,print)=>{
    let s=num1+num2;
    print(s);
}
// const print = (msg)=>{
//     console.log(msg);
// }
sum(20,30,(sum)=>{
    if(sum>20){
        console.log("Greater than 20")
    }else{
        console.log("Less Than 20")
    }
    // console.log(msg);
});