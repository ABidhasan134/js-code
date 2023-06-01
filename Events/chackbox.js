const programs=document.querySelectorAll("input[name=program]");
//this is select only input who have name=program 
console.log(programs);
//for this selecting this will be a nodelist where only index number can be accessed
 Array.from(programs).map((program)=> 
 //here convert nodelist into array 
 //map will bring value one by one into program
{
    program.addEventListener("change",chaking);
});
function chaking (e)
{
    if(e.target.checked)/*when the target(e or any event) 
    will be tigard (target) then it will be checked */
    {
        //console.log("checked");
        console.log(e.target.value);//this will take value from html
    }
}