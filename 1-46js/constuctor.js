function student(a,b,c,d)
{
    this.name=a;
    this.age=b;
    this.Cgpa=c;
    this.language=d;

    this.display= function ()
    {
       console.log(this.name +"<br>");
       console.log(this.age+"<br>");
       console.log(this.Cgpa+"<br>");
       console.log(this.language+"<br>");
    }
}

var student1= new student ("Abid",27,3.25,"Bangla & English");
var student2= new student("anis",24,4.00,"Bangla & hindi");
var student3= new student("akib",17,3.55,"portugig & English");

student1.display();
student2.display();
student3.display();