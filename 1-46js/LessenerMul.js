var len = document.querySelectorAll(".myBotton").length;//finding the length of array
for(var i=0; i<len; i++)//i can be most as = to length 
{
    document.querySelectorAll(".myBotton")[i].addEventListener("click", hope);
    //select class and add listenar also cell function
    function hope()
    {
        var text = this.innerHTML;//listenar sttorg valu into this
        document.querySelector("h1").innerHTML=text;//changeing text by innerhtml
    }

}
