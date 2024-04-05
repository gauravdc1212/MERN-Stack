// Array is a collection of different type of object/datatype 
const msg=()=>{
    console.log("Arrow Function")
}
let data = [10,20,30,40,50,60,60.2,70.2,"Kiet",msg];
console.log(data);
data[9]();
// for(let i=0;i<data.length;i++){
//     // String Literals
//     console.log(`value of ${i} is ${data[i]}`);
// }
// for(let index in data){
//     console.log(` value of ${index} is ${data[index]}`);
// }
// for(let value of data){
//     console.log(`Value of Array =${value}`);
// }

// For Each

data.forEach((value)=>{
    console.log(`Value of array = ${value}`);
})