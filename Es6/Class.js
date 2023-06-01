class ABid
{
    //creating consturctor
    constructor (name,id)
    {
        this.id=id;
        this.name=name;
    }
    //in here we can change any thing 
    set studentName(name)
    {
        this.name=name;
    }
    get studentInfo()
    {
        return this.id +" "+ this.name;
    }
}
let student1=new ABid("Raisul Islam",1274);
console.log(student1.id);
console.log(student1.name);
 
student1.studentName="Asif";
console.log(student1.name);

console.log(student1.studentInfo);