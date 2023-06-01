let number=[10,30,40,50,60];
let NewNum=number.map(function(x)
{
    return x*x;
})
console.log(NewNum);
console.log(number);
var Arry=[20,30,45,55,65];
var NewArry=Arry.filter(function(x)
{
    return x>30;
})
console.log(Arry);
console.log(NewArry);