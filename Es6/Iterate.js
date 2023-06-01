// for in 
//iterate (loop) over the properties of an object.
let students=
{
    Id: 101,
    name: "Abid Hasan",
    cgpa: 3.35,
}
for (let x in students)
{
    console.log(`${x}: ${students[x]}`)
}
// value of an iterable data structures such as array
const names=["s1","s2","s3"];
for (let name of names)
{
    console.log(name);
}
