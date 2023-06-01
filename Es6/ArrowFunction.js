var student =[
    {
        id: 101,
        Name: abid,
        CGPA: 2.3,
    },
    {
        id: 102,
        Name: Raisul,
        CGPA: 3.45,
    },
    {
        id: 103,
        Name: Asif,
        CGPA: 3.80,
    },
];
//taditional function
function studentName1()
{
    return student.filter(function(x)
    {
        return x.CGPA>3;
    }).map(function(y)
    {
        return y.Name;
    });
}
console.log(studentName1());