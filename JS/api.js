//API Calls

let person = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
  occupation: "Developer",
  hobbies: ["reading", "gaming", "coding"],
  isMarried: false,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

console.log(person);

//destructuring the object
const { name, age, city, country, occupation, hobbies, isMarried } = person;
console.table({
  name,
  age,
  city,
  country,
  occupation,
  hobbies,
  isMarried,
});

console.log(person.greet());

function calculate(a, b) {
  //parameters
  return a + b;
}

console.log(calculate(5, 10)); //arguments

// JS Execution Context

let x = 10; // Global Execution Context

function increase(x) {
  x++;
}
increase(x);
console.log(x); // 10
// x is not changed because it is passed by value

// for loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}

Object.getPrototypeOf(person); // returns the prototype of the object

console.log(Object.getPrototypeOf(person)); // returns the properties of the object

//equality operators

console.log(5 == "5"); // true  //type coercion
console.log(5 === "5"); // false // strict equality
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
console.log(5 > 3); // true
console.log(5 === 5); // true

//let vs const vs var

var a = 10; // function scope
var a = 20; // redeclared

console.log(a); // 20

let b = 10; // block scope
b = 20; // reassigned
console.log(b); // 20

const c = 10; // block scope

// c = 20; // TypeError: Assignment to constant variable.
// console.log(c); // 10

console.log(`The value of a is ${a}`); // template literals

//iterables in js

let arr = [1, 2, 3, 4, 5];
let str = "Hello World";
let obj = {
  name: "John",
  age: 30,
  city: "New York",
};
let set = new Set([1, 2, 3, 4, 5]);
let map = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
]);
let weakSet = new WeakSet([
  { name: "John" },
  { age: 30 },
  { city: "New York" },
]);
let weakMap = new WeakMap([
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
]);
