var win = 0;
var los = 0;
for( var i=1;i<=5;i++)
{
    
var gussingNum = parseInt(prompt("Enter a Number: "));
var randomNum = Math.floor(Math.random()*5)+1;
if(gussingNum==randomNum)
{
    console.log("you have won ");
    win++;
}
else
{
    console.log("you have lost. Random Number was: "+ randomNum);
    los++;
}
}
if(win>los)
{
    console.log("finaly you won ");
}
else
{
    console.log("finaly you lost ");
}
document.write("Total Number of won = "+ win+"<br>");
document.write("Total Number of loss= "+los);
