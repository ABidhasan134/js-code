const task1=(cellback)=>
{
    console.log("task one is working");
    cellback();
}
/* here we can recive perameter by diffrent(cellback) name
after that we diclar that perameter(cellbace()) is a function */
const task2=(cellback)=>
{
    setTimeout(() => {
        console.log("Date is loaded form APi");
        cellback();
    },3000);
}
const task3=(cellback)=>
{
    console.log("task there is working");
    cellback();
}
const task4=(cellback)=>
{
    console.log("task four is working");
    cellback();
}
const task5=()=>
{
    console.log("task Five is working");
}

task1(function f1(){
    /*we are cell here task1 and then creating a function and 
     after that sent it as argument*/
    task2(function f2(){
        task3(function f3(){
            task4(function f4(){
                task5();
            });
        });
    });
});
// task2();
// task3();
// task4();
// task5();
// ‍another cellback function exampel is here
console.log("hi");
document.querySelector(".btn").addEventListener("click",()=>
{
    console.log("the button is clicked ");
});
console.log("bye");
