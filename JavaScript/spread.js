// Note : ... symbol is used for rest and spread Operator both.

// Rest Operator : - allows n number of argumnet
// Spread Syntax : 


let numbers  = [40,10,30];
console.log(numbers)
console.log(...numbers);

function sum (x,y,z){
  return x+y+z;
}

sum(10,20,30);
sum(...numbers)


let data = ["John Smith",29,300000];
let coll = [...data,20];


coll

