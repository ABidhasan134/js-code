document.addEventListener("keypress",function(event)
{
    var text=event.key;
    document.querySelector("p").innerHTML=text;
});
var count=0;
document.querySelector("textarea").addEventListener("keypress",function(event)
{
    count++;
    var text1=event.key;
    document.querySelector("p").innerHTML=count;
});