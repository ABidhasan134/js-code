let number=[5,55,14,36,56];
let fristNumber=number.find(x=>x%2==0);
console.log(fristNumber);
 
let EvenNumber=(value) =>
{
    if(value%2==0)
    return value;
}
let fristEvenNumber=number.findIndex(EvenNumber);
console.log(fristEvenNumber);

//object finding here 
let students = [
    {
        id: 101,
        gpa: 3.5
    },
    {
        id: 102,
        gpa: 4
    },
    {
        id: 103,
        gpa: 4.25
    },


]
console.log(students.find(x=>x.gpa>4));