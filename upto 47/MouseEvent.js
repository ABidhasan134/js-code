var fclick= document.querySelector("div");
fclick.addEventListener("click",function(e){
    //console.log("click");
    console.log(e.target.id);
    //we can find any element by target methord
});
fclick.addEventListener("dblclick",function()
{
    console.log("click is 2nd time");
});
fclick.addEventListener("mousedown",function(){
        console.log("your mouse is down");
});
fclick.addEventListener("mouseup",function(){
    console.log("your mouse is up");
});
fclick.addEventListener("mouseenter",function(){
    console.log("mouse have been enter");
});
fclick.addEventListener("mouseleave",function(){
    console.log("mouse have been leave");
});
fclick.addEventListener("mouseover",function(){
    console.log("your mouse is over here");
});
fclick.addEventListener("mousemove",function(e){
    //console.log("X accssis=" +e.clientX, " Y accsis="+e.clientY );
    //This accssis is give result comper to window
    console.log("OffsetX="+e.offsetX,"OffsetY="+e.offsetY);
    /*this give valu comper with element we have 
    created. From top corner of element
    */

});