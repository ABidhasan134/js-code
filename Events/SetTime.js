// setTimeout(() =>
// {
//     console.log("hi");

// },10000);
// setTimeout(display,7000);
// function display()
// {
//     console.log("here we go");
// }
var myBtn=document.querySelector(".visit");
var myMass=document.querySelector(".masseg");
myBtn.addEventListener("click",Time);

function Time()
{
    myMass.textContent="This button is working";
    setTimeout(() => {
        myMass.textContent="";

    }, 2500);
}
var myBtn=document.querySelector(".visit");
var myMass2=document.querySelector(".masseg2");


myBtn.addEventListener("click",counted);

function counted()
{
    var count=0;
    myMass2.textContent=count;
    
    setInterval(()=>
    {
        count++;
        myMass2.textContent=count;
    },100);
}