//Set : It a collection uniques values
// It is not a coolection key value pair
// It is similar to js array.

//empty set
let items = new Set();

let list  = new Set(["John","Mike","David"]);

//add values in set
items.add("Sugar");
items.add(29);
items.add(true);
items.add({ name : "Oil"});

//fetch values from set
// items;
for(let value of items){
  console.log(value)
}
// list;

//set.delete(value);
//set.has(value);
// set.clear();
// set.size

// Map :
// Cricket  ->
// PLayer   -> Map
// Set  : 
// PlayerList
// GamesList

