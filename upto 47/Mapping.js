var myElement = document.querySelectorAll(".btn");
//console.log(myElement);
Array.from(myElement).map((button) =>
/* here we convert my element 
into a array variable and mapping here 
Mapping is basicly map object holds key value pairs 
remmember the orignal insertion order of the keys */
{
    button.addEventListener("click",function(){
        console.log("clicked");
    })
})