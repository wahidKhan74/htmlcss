class Hero{
  //A class may only have one constructor
  constructor(name,age,movie){
    //initialization
    this.name = name;
    this.age =age;
    this.movie = movie;
  }
  
  printHero(){
    console.log(`I am ${this.name}  with age ${this.age} a star of movie ${this.movie}`);
//     return this.name;
  }
}

let hero = new Hero("Balaya Babu",20,"Legend");
hero.printHero();
let hero2 = new Hero("Mahesh Babu",40,"Spider Man");
hero2.printHero();


//In js if function return a value it will give value otherwise it will return undefined.

// Bank : -> showbalance, withdwal,deposit
// User  : -> login and logout
// Calculator :-> add ,sub , mul , div






