function squer (x)
{
    console.log(`squre of ${x}:${x*x}`);

}
//squer(6);

function higherOrderFunction(num, callback)
{
    callback(6);
}
higherOrderFunction(6,squer)