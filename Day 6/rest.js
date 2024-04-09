// REST Parameter
// 0=Default Parameter
const sum=(num1=0,num2=0,...numbers)=>{
    let s=0;
    if(numbers.length>0){
     s=numbers.reduce((a,b)=>{
        return a+b;
    })
}
   console.log("Sum of Number = ",(num1+num2+s));
}
// sum();
sum(12,70,100,100,100,100);
// sum(20); = num1 
// sum(20,30) => num1=20,num2=30