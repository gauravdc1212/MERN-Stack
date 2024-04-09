const data= [10,20,30,40];
let [x,y,z,w] = data;
console.log(x,y,z,w);
const studentInfo = {
    name:"ravi",
    course:"mca",
    rollno:1
}
// let {name,course,rollno} = studentInfo;
// console.log(name,course,rollno);

// If we want to change the name then we can write in this format 

let {name:sname,course:mycourse,rollno:rno} = studentInfo;
console.log(sname,mycourse,rno);