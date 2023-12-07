// class is blueprint of object
class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  speak() {
    console.log("Hi", this.speaks);
  }
  //these are associated to classes
  static myType() {
    console.log("Animal");
  }
}

Animal.myType();
// Animal.speak(); // Error

//object
let dog = new Animal("dog", 4, "bhow bhow"); // create object
let cat = new Animal("cat", 4, "meow");

// console.log(dog);
dog.speak(); // call function on object
// console.log(cat);
cat.speak();
