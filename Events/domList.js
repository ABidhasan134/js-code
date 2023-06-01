const Depertment = document.querySelector("#depertment");
console.log(Depertment);
Depertment.addEventListener("change", selectbox);
function selectbox(e)
{
    //console.log("selected");
    console.log(e.target.value);
}