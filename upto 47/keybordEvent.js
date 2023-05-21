var myVar=document.querySelector("textarea");
myVar.addEventListener("keydown",function(e){
    console.log("keydown");
    if(e.repeat)
    {
        alert("Do you went to repeat?");
    }
});
myVar.addEventListener("keypress",function(){
    console.log("keypress");
});
myVar.addEventListener("Keyup",function(){
    console.log("keyup");
});
myVar.addEventListener("Keyup",function(e){
    console.log(e.shiftKey);
});
