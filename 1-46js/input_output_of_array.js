var num1= new Array ();
for (var i=0;i<5;i++)
{
     num1[i] =parseInt(prompt("Enter the numbers:"));

}
var sum=0;
for(var i=0;i<5;i++)
{
    console.log(num1[i]);
    sum=sum+num1[i];
}
console.log("sum= "+sum);