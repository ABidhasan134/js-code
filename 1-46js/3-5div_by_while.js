var sum=0;
var i=1;
var n=parseInt(prompt("Enter the last number:"));
while( i<=n )
{
    if(i%3==0 && i%5==0)
{


    sum=sum+i;
}
 i++;
}
document.write(sum);
