// thous are windows event this worke for hole windows
window.addEventListener("load",function(){
    console.log("load");

});
window.addEventListener("unload",function()
{
    console.log("unload");
});
window.addEventListener("scroll", function(){
    console.log("scroll");
});
window.addEventListener("resize",function(){
//console.log("resize");

    const side= window.outerWidth;
    const tall= window.outerHeight;
    console.log(`Height: ${tall}, Width: ${side} `);
});
//toggle worke with only details
var hide=document.querySelector("details");
//console.log("details");
hide.addEventListener("toggle", function (e){
    console.log(e.target.open);
});