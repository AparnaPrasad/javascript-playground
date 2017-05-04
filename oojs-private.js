function Person(fname, lname, age) {
    var fname = fname; //private properties
    var lname = lname;
    var age = age;

   function greet()  //private function
    {
        console.log("hello " + fname + " " + lname);
    }

    this.greetHandler = function() //protected function can access private members
    {
     greet();
     console.log("your age:", age);
    }
}


var p1 = new Person('apps', "bs", "25");
 p1.greetHandler();