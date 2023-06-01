// forEach can calls a function for each element in fruits
let sum=0;
const number=[10,20,30,40];
number.forEach(myfunction);
function myfunction(item)
{
    sum +=item;
}
console.log(sum);
let numbers=[2,4,6,8,5];
let squNumber=[];
numbers.forEach(function(x)
{
    console.log(x*x);

})