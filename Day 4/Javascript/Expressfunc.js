//FUNCTION EXPRESSION 
// const msg =function message(){
//     console.log("Welcome to function Expression");
// };
// msg();
// annonymous function -- function without name
const msg =function (){
    console.log("Welcome to function Expression");
};
msg();
const sum=function(num1,num2){
    let sum = num1+num2;
    console.log("Sum = ",sum);
}
sum(23,45);

const mul = function(num1,num2){
    return num1*num2;
};
console.log("Multiply = ",mul(23,6));
console.log(typeof sum);