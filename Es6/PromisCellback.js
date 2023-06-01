const task1=()=>{
    //creating promise and reject the conditon
    return new Promise((resolve, reject)=>{
        resolve("task is not complited");
    });
};
const task2=()=>{
    //creatin arrow function here
    return  new Promise((resolve,reject)=>
    {
setInterval(()=>
{
    resolve("task 2 is complited");
},2000)
    })
    };
const task3=()=>{
    return new Promise((resolve, reject)=>{
        resolve("task 3 is complited");
    });
};
/* use .then function reather than use callback fucnction 
to see or ignor nested fuction celling  */

// task1()
// .then((Response) => console.log(Response))
// //for error or reject promis
// .catch((error)=>console.log(error))
// .then((Response)=>console.log("task2 is complited"))
// .then((Response)=>console.log("task3 is complited"));



/* async and await function for promise this can replace .then 
 function or easy are than .then function */ 
async function alltask()
{
    const t1 = await task1();
    console.log(t1);
    const t2 = await task2();
    console.log(t2);
    const t3 = await task3();
    console.log(t3);
}
alltask();