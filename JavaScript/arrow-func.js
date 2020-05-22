// Arrow function

//function expression.
let sampleFun = function(){
  console.log("I am a sample function");
}
sampleFun();

// In js ES6 onwards a new syntax is added
// arrow function -> lambda expression

//function expression with arrow func.
let sampleFun2 = () => {
  console.log("I am a sample function 2");
}
sampleFun2();


//callabck

let greeting = function(x){
  console.log(` Hello !`);
  x();
}

greeting(()=> {
  console.log("John Smith");
})


setTimeout(()=>{
  console.log("After 2000ms")
},2000);


//single linner /one statement arrow function
let sample = ()=> console.log("I am single line");
sample();










