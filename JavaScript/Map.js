// Map : a smaller pupose datastructor
// store values in keyed collections.
// Object : stores key only string type.
// Map : stores key of any type.

let user  = { name : "John Smith", age: 20, 3:"Mike"}
console.log(user.size);

let userMap = new Map();
console.log(userMap);

//add value to Map
// userMap.set(key,value)
userMap.set(1,"John Smith");
userMap.set(true,"Married");
userMap.set("lastName","Smith");

//read value from Map
// map.get(key);
userMap.get('lastName');

// key exist or not
userMap.has('lastName');

// remove data
userMap.delete(1213);
// remove all value

// userMap.clear();

//map size
userMap.size;

userMap;





