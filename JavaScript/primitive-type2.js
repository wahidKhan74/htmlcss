//Java Pure OOP  classes and Inheritance
//Js -> Object based Programming :-> Object  + Iheritance
//Recent Js -> OOP :->

// inheritance -> class -> 
// prototype :-> 

function Employee(id,salary,name){
  this.id = id;
  this.name = name;
  this.salary = salary;
};

// let emp1 = new Employee(101,2000,"John Smith");
// emp1.dept = "Dev";

// emp1;

// let emp2 = new Employee(101,2000,"John Smith");
// emp2;


Employee.prototype.dept = "Dev";
let emp1 = new Employee(101,2000,"John Smith");

console.log(emp1);
console.log(emp1.dept);

let emp2 = new Employee(101,2000,"John Smith");
console.log(emp2);
console.log(emp2.dept);

// Manulay modify constructor
// take help of prototype

