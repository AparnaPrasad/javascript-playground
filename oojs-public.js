function Person(fname, lname, age)
{
    this.fname = fname; //public properties
    this.lname = lname;
    this.age = age;


}
Person.prototype.greet = function() //public function
{
    console.log("hellooo "+this.fname+" "+this.lname);
    console.log("you are now "+this.age);
}
var Apps = new Person("Aparna", "B S", 25);
Apps.greet();
