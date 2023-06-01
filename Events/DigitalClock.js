var Btn = document.querySelector(".btn");
//console.log(Btn);
//var Mass= document.querySelector(".masseg");
Btn.addEventListener("click",startClock);
console.log(Mass);
function startClock()
{
    var date= new Date();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds= date.getSeconds();
    var time= hours +":"+minutes+":"+seconds;
    Btn.textContent=time;
    setInterval(startClock,1000);
}
