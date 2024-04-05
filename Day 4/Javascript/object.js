// Object 
let studentInfo={
    rollno:1,
    name:"Gaurav Singh",
    course:"MCA",
    college:"KIET",
    marks:[80,75,85,78,90],
    music:()=>{
        console.log("Hello World");
    },
    play:function(){
        console.log("Play Cricket")
    }
}
console.log(studentInfo.name);
console.log(studentInfo.marks.forEach((item)=>{
    console.log(item);
}))
console.log(studentInfo.music());
console.log(studentInfo.play());

let arrvalue=[studentInfo,studentInfo,studentInfo];
arrvalue.forEach((item)=>{
console.log(item.name);
})