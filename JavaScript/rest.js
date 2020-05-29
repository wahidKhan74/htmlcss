// Rest Parameter :

function sample(value){
  console.log(value,'hi','20','122');
}
// Math.max(18,20,30,40,1029,2432,232)
// sample(10,20,10,20);
// sample(20);


// arbitary number of argumnets

//ES6 : Rest Parameter
// many (n) argumnets
function sum(...values){
  console.log(values)
  let sum = 0;
  for (let i of values){
    sum+=i
  }
  return sum;
}

sum(10,20,30,40,50,60,70,10,20,10,10,20);

// two function 
// Max and Minimum values



