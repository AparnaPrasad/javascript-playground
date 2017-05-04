function Person(fname, lname, age)
{
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.greet = function()
    {
        console.log("hellooo "+fname+" "+lname);
    }

}
var Apps = new Person("Aparna", "B S");
var Ravi = new Person("Ravindra", "R H");
Apps.greet();
Ravi.greet();