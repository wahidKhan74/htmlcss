let x = function callMe(name){
  return name;
}
// y("John Smith");

let callmeOtherTime  = function (name){
  return name;
};

console.log(callmeOtherTime);
console.log(x);

console.log(callmeOtherTime("John Smith"));
console.log(x("Will Smith"));

// When we will get return value from function ?
// Ans : call / invoke function


