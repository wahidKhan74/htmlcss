//function :-
// 1. function type (parameter) :- 
// 1. parametrized func
// 2. Non parametrized func

// 2. function types (based on the decleration syntax) :- 
// 1. function decleration
// 2. function expression / IIFE

//function decleration: -
function sampleFun(value){
  console.log(`The input value is, ${value}`);
}
sampleFun(10);
sampleFun("John Smith");
sampleFun(true);
console.log(sampleFun);

// 2. function expression / IIFE
let sampleFun2 = function(param){
  console.log(`The input value is, ${param}`);
};
sampleFun2(1234);
console.log(sampleFun2);
// key points : 
// anonymous function
// 1. anonymous function expression 
// 2. labled function expression
 // with labled function expression cannot use function lable/name to invoke/ call a function

let sampleFun3 = function printValue(value){
  console.log(`The input value is, ${value}`);
}

let sampleFun4 = function showValue(value){
  console.log(`The input value is, ${value}`);
}

sampleFun3(102);
sampleFun3("Smith");
// printValue(123);


console.log(sampleFun3);
console.log(sampleFun4);







