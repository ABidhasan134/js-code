try{
//main code area
    alert("hi Every one:");
    alert(x);
    alert("Last chance");
}
catch(error)
{
    //find the error line and indety
    console.log(error);
}
finally
{
    alert(console.log("It work alwys"));
}
document.querySelector("btn").addEventListener("click",function
()
{
    var num= document.querySelector("#abid").value;
    alert("button is clicked");
    try
{
    if(num>10)
    {
        throw"inpute is too high";
    }

    else
    {
        throw"inpute is too low";
    }
}
catch(error)
{
    console.log(error);
}
})

