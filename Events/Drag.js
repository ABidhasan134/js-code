
var myvar1=document.querySelector("div");
var myvar2=document.querySelector("p");

myvar2.addEventListener("dragstart",function(e)
//frist tell whice element will be draged 
{
    // transfer deta and set date into peragrap affter all thous date will get from event by the id
    e.dataTransfer.setData("peragrap",e.target.id);
    
    
});
myvar1.addEventListener("dragover",function(e){
    e.preventDefault();
    //this will this will be prevent default valu of the div
});
myvar1.addEventListener("drop",function(e)
{
    var id = e.dataTransfer.getData("peragrap");
    //receving date by peragrap here using getData
    console.log(id);
    myvar1.appendChild(document.getElementById(id));
    //appendchild this is adding child into main (div) or where to drop
});
