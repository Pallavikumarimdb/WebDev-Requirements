# What is Functional Programming?
> Functional programming is a programming paradigm designed to handle functions in a better way in Js (mainly pure functional).

> Pure functions are crucial in functional programming and make code easier to understand, test, and maintain.<br>
Example of a Pure Function:
```js
// Pure function
function add(a, b) {
  return a + b;  // Always returns the same result for the same inputs
}
console.log(add(2,4));

// -----------------------
function add(a, b) {
  console.log(a + b);  // Always returns the same result for the same inputs but still impure since console is fn present outsider. hence use above.
}
```

Example of an Impure Function:
```js
let x = 5;

function addToX(y) {
  x = x + y;  // Modifies external state (global variable 'x')
  return x;
}

addToX(3);  // Impure, because it modifies 'x'

```

> JavaScript is a multi-paradigm language. We can use object-oriented, procedural and functional programming paradigms all the same time in javascript.

### Key Featuree:
1. Imperative and Declarative way of writing code.
2. Pure functions and what are side-effects
3. Higher order Fn (map, filter, reduce, etc)
4. Composition
5. Closure
6. Currying

> Procedural, object-oriented, and functional programming are three different paradigms used in software development. Each has its own way of organizing and structuring code to solve problems, and they emphasize different concepts.

> Procedural Programming focuses on breaking down the problem into procedures (functions) that operate on data.

> Object-Oriented Programming organizes code around objects that encapsulate both data and behavior.

> Functional Programming treats computation as the evaluation of pure functions and emphasizes immutability.


> A multi-paradigm language is a programming language that supports more than one programming paradigm, allowing developers to choose the most suitable approach for a specific task. 

```js
// Procedural style
function greet(name) {
  return `Hello, ${name}`;
}

// Object-oriented style
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
}

// Functional style
const greetFunc = (name) => `Hello, ${name}`;

```