//Defult 
function steValue(x,y)
{
    if(y==undefined,x==undefined)
    {
        x=2;
        y=1;
    }
    console.log(`x=${x}, y=${y} `);
}
steValue();
steValue(10,26);
function mass(text="this is Defult value")
{
    console.log(text);
}
mass();
mass("I love my country:");
//rest parameters

function printNumber(x,y,...z)
{
 console.log(`x=${x},y=${y}, z=${z}`);
}
printNumber(10,20,31,25,36,25);
