let showMsg = function(){
  console.log("I am a msg for greater good");
}

let showGlobalMsg = function (x){
  console.log("I am a global Msg");
  console.log(x);
  x();
}

setTimeout(showMsg,2000);

// showGlobalMsg(showMsg);

showGlobalMsg(function(){
 console.log("I am another callback");
});



// callback :- 
//A callback is which is pass as an argument to another function call, and hope that function will get executed at some time.

