const promise1= new Promise ((resolve,reject)=>
{
    let completedpromise = false;
    if(completedpromise)
    {
        resolve("completed promised 1")
    }
    else
    {
        reject("not completd promise 2");
    }
});
promise1.then((response)=>{
console.log(ressponse);
});
promise1.catch((error)=>{
 console.log(error);
});