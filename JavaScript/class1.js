// ES6 : -> Js  -> Object Oriented Programming
// ES6 :- Classes ,
// A class is a function 

class Employee{
  name; dept;
  // zero args
  //   constructor(){ }
  // parametrized constructor
  // In ES6 class Only one constructor per class allowed
  
  constructor(name,dept){ 
    // public variable
    this.name = name;
    this.dept = dept;
  }

  showEmployee(emp){
    console.log(`Hello, ${emp.name}`)
  }
  
  printEmp(){
   console.log(`Name of Emp : ${this.name} and Dept is :${this.dept}`)
  }
}

let emp  = new Employee("John","Dev");
emp.showEmployee({ name : "John Smith"});
emp.printEmp();



