// callback hell :-
// too many nested callback that time callback occrs

let first = function(callback,value){
  callback(value*2);
}
let second = function(callback,value){
  callback(value*2);
}
let third = function(callback,value){
  callback(value*2);
}
// too many // nested callback
first(function(firstResult){
    console.log(firstResult);
    second(function(secondResult){
      console.log(secondResult);
      third(function(thirdResult){
            console.log(thirdResult);
            },secondResult)
    },firstResult)
},200);

// callback for async --> nested 
// first -> output -> input -> second .....






