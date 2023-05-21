/*For run this code add this line in html file
<script src="Letter gread.js"></script>*/
var marke=parseFloat(prompt("Enter the marke: "));
if(marke>=101)
{
    document.write("Marke Eror "+ marke + "<br>");    
}
else if(marke>=80)
{

    document.write("Your marke is "+ marke + "<br>" + "you got the A+"+"<br>");
}
else if(marke>=70)
{
    document.write("Your marke is "+ marke + "<br>" + "you got the A"+"<br>");
}
else if(marke>=60)
{
    document.write("Your marke is "+ marke + "<br>" + "you got the A-"+"<br>");
}
else if(marke>=50)
{
    document.write("Your marke is "+ marke + "<br>" + "you got the B"+"<br>");
}
else if(marke>=40)
{
    document.write("Your marke is "+ marke + "<br>" + "you got the C"+"<br>");
}
else if(marke>=35)
{
    document.write("Your marke is "+ marke + "<br>" + "you got the D"+"<br>");
}

else
{
    document.write("you marke is" + marke +"you are fail");
}