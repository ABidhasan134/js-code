//form book
function callMyName(name,fun)
{
    var myAge=23;
    fun(myAge);
    console.log('Hey I am'+ name+ "and My Age=");
}
function hello (age)
{
    console.log('passing argument'+ age);
}
console.log("Abid",hello);