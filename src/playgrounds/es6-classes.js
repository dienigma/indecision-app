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

const me = new Person("Chinmay Joshi", 24);

console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person("Andrew Mead", 27);

console.log(other);
console.log(other.getGreeting());
console.log(other.getDescription());
