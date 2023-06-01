var input= document.querySelector("input");
input.addEventListener("blur",function(e){
    console.log("The blur is occer:");
    input.style.backgorund = "transparent";
    var value;
    input.value= e.target.valu.toUpperCase();
});
input.addEventListener("focus",function(){
    input.style.background="red";
 })

input.addEventListener("focusin",function(){
    console.log("focuse is just occer");
    input.style.backgorund= "transparent";
});
input.addEventListener("focuseout",function()
{
    console.log("the focusout is out occer");
});
