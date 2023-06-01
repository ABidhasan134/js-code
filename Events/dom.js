const VarName= document.querySelector("input[name=gmail]");
//console.log(VarName);
VarName.addEventListener("change",Repp);
function Repp(event)
{
    //console.log(event.target);
    console.log(event.terget.valu);
}