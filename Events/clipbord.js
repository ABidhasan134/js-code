var myVar1= document.querySelector("input");
var myVar2=document.querySelector("p");
myVar1.addEventListener("copy",function()
{
    myVar2.innerText = "you have copy the text:";
    console.log();
});
myVar1.addEventListener("cut",function(){
    myVar2.innerText = "you have cut the text";

});
myVar1.addEventListener("paste",function()
{
    myVar2.innerText = "you have pasted it."
    
});