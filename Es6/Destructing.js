let numbers=[10,20,30,40,50];
let [num1,num2,...x]=numbers;
//take the array number frist is cell destructing
console.log(num2);
//print without array index
console.log(x[1]);
//also can print with array index
console.log(x);

//object Destructing
//creating object 
 const studentInfo={
    id: 120,
    name:"Abid hasan",
    Language:{
        bigener: "English",
        Native: "Bangla",
    }
 }
 const {Language,name}=studentInfo;
 //disturcting here
 console.log(Language,name);

 //function destructing 
 const student={
    id: 100,
    name: "Raisul Islam",
 }
 const studentIn=({id,name})=>{
    console.log(`${name} ${id}`);
 }
 studentIn(student);