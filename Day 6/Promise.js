let age =9;
const info = new Promise((resolve,reject)=>{
if(age>18){
    resolve("You Can Vote")
}else{
    reject("You Cannot Vote")
}
})
info.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
});

// Async await reject ke liye kaam nhi krta uske liye use try catch me dalna pdega

const resultInfo = async ()=>{
    try{
        let result = await info;
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
resultInfo();
console.log("Hello");

