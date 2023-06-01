let x=10;
/* let allows us to declare that are limited to the scope of a block statemet, 
or expression on which it is used , unlicke the var keyword , which
declares a variable globally or locally to an entire function regardless
of block scope */
const add=(x,y)=>
{
    let sum=x+y;
    console.log(`The sum of two number is ${sum} and this is the way to declar string in ES6`);

}
add(20,30);
console.log(x);