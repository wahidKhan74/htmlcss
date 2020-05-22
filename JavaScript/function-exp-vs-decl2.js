// ES6 :-function expression
// bank operation :- showbalnce, withdraw, deposite, fd

let bankUser = {
  name: "John Smith",
  balance:20000,
  id:1029
};

showBalance(bankUser);
//function decleration
function showBalance(user){
  console.log(`Hello, ${user.name} Your Balance is, ${user.balance} `);
};

printBalance(bankUser);
// function expression : IIFE
let printBalance = function (user){
  console.log(`Hello, ${user.name} Your Balance is, ${user.balance} `);
};




//Note : 
// 1. Hoisting :-
// property hoisting :  varaibles and arguments will get value undefined if it not initialized.
// function hoisting :  fuction can be called befor it get declerared.
let x ;

// console.log(x);
//Note : Hoisting is supported by function decleration only 
// and it is not spported by function expression













