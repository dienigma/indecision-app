class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, I am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` ${this.name.split(" ")[0]} majors in ${this.major}.`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    greeting += ` I am visiting from ${this.homeLocation}.`;
    return greeting;
  }
}

const me = new Student("Chinmay Joshi", 24, "Computer Science");

console.log(me);
console.log(me.getDescription(), me.hasMajor());

const other = new Student("Andrew Mead", 27, "Machine Learning");

console.log(other);
console.log(other.getDescription(), other.hasMajor());

const traveller = new Traveller("Jon Snow", 25, "Winterfell");
console.log(traveller.getGreeting());
