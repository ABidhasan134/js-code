//sum fo two number
//for run this code add this below code in html
//<script src="sum.js"></script>
var num1=prompt("Enter the number: ");//number is taking as string 
var num2=prompt("Enter the number: ");
num1=parseInt(num1,10);//convert string into number for decimel number use 10
num2=parseInt(num2,10);//if we want we can convert oct or hex
var sum=num1+num2;
document.write("Addition=" + sum + "<br>");//for adding text or string have to use (+) oparator
var sub=num1-num2;
document.write("Subtration="+sub+"<br>");
var Mal=num1*num2;
document.write("Maltipul=="+Mal+"<br>");
var Div=num1/num2;
document.write("Divition="+ Div+"<br>");
var Last=num1%num2; //modulas are use to find the last number after the divition
document.write("Last number="+Last + "<br>");
