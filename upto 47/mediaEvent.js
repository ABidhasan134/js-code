const myVar=document.querySelector("video");
//console.log(myVar);
myVar.addEventListener("canplay",function(){
    console.log("cnaplay");
});
myVar.addEventListener("play", function(){
    console.log("play");
});
myVar.addEventListener("pause",function(){
    console.log("pause");
});myVar.addEventListener("ended",function(){
    console.log("Thanks for watching ")
});
