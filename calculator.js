var num1=parseFloat(prompt("Enter the frist number:"));
var num2=parseFloat(prompt("Enter the 2nd number: "));
var oparetor=prompt("Enter the opretor: ");
switch(oparetor)
{
    case"+":
    var num=num1+num2;
    console.log("the sum is:"+ num);
    break;
    case"-":
     num=num1-num2;
    console.log("Diffrent of numbers: "+ num);
    break;
    case"*":
     num= num1*num2;
    console.log("Maltipal is : "+ num);
    break;
    case"/":
     num=num1/num2;
    console.log("Dividation is: "+ num)
    break;
    default:
        console.log("Eror oparetor: "+ oparetor);
}