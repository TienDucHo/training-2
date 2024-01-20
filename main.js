console.log("Hello World");

let myVar = 1; // Number, BigInt, Boolean, String, Array, Object

console.log("My var", myVar);

let a = 5,
  b = 3;

let c = 0;

c++;

// AND and OR boolean
a && b;
// NOT
!a;

// If and loop

a = 20;

if (a < 15) {
  console.log("A is less than 15");
} else if (a < 20) {
  console.log("A is less than 20");
} else {
  console.log("A is bigger than 20");
}

switch (a) {
  case 15:
    console.log("A is 15");
    break;
  case 20:
    console.log("A is 20");
    break;
  default:
    console.log("A is bigger than 20");
    break;
}

// for - while

for (let i = 0; i < 10; ++i) {
  console.log("Hello", i);
}

let i = 0;
while (i < 10) {
  console.log("Hi", i);
  i++;
}

function myFunc(a, b) {
  return a + b;
}

console.log(myFunc(3, 5));

const myOtherFunc = (a, b) => a + b;

console.log(myOtherFunc(4, 5));

// Arrays

let myArr = [12, 20, 28];

for (let i in myArr) {
  // Different than the in keyword of Python
  console.log("In", i);
}

for (let i of myArr) {
  console.log("Of", i);
}

myArr.forEach((item, index) => {
  //iterative methods
  console.log("item", index, "is", item);
});

const myTransformedArr = myArr.map((item, index) => item * 2);

console.table(myTransformedArr);

const myOtherArr = myArr;

console.log(myOtherArr);
const myOtherOtherArr = [...myArr]; //spread

myArr[0] = 24;
console.log(myOtherArr); //12, 20, 28
console.log(myOtherOtherArr); //12, 20, 28

//Number, String, Array, Boolean, Function => Object

// Object in JS is not like other Object in other languages
let myPar = {
  name: "John Doe",
  age: 25,
  sayHello: function () {
    console.log(
      "Hello! My name is",
      this.name,
      "and my age is",
      this.age
    );
  },
}; // What is this?

myPar.sayHello();

// JS has classes. Classes are templates for making object

let myOtherObj = { ...myPar }; // spread operator

// Fetch API
let data = "something";

// async await
async function myFetch() {
  let response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/ditto"
  );
  let data = await response.json();
  console.log(data);
}

myFetch();
// Asynchronous
console.log(data);

// DOM manipulator

// Document Object Model

const body = document.getElementsByTagName("body")[0];

body.style.backgroundColor = "aquamarine";

const myHeading = document.createElement("h1");
const myHeadingText = document.createTextNode("Hello World!");
myHeading.appendChild(myHeadingText);
const hero = document.getElementById("hero");
hero.appendChild(myHeading);

// Counter button?
let count = 0;
const counter = document.getElementById("counter");
counter.onclick = () => {
  count++;
  counter.textContent = `You have clicked me ${count} time(s)`;
};
