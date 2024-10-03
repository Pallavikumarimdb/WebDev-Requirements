# What is Functional Programming?
> Functional programming is a programming paradigm designed to handle functions in a better way in Js (mainly pure functional).

### Pure function:
> A pure function is a function that adheres to two main principles:

1. Deterministic Behavior: A pure function always produces the same output for the same inputs. It does not rely on any external state or variables that can change during execution.

2. No Side Effects: A pure function does not modify any external state or variables. It only operates on the data provided to it (its inputs) and returns a result without affecting anything outside its scope.

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


#### Imperative and Declarative way of writing code:
>  Imperative programming focuses on how to achieve a result by explicitly specifying each step of the computation process. It involves giving the computer detailed instructions on how to change the program’s state.

```java
const numbers = [1, 2, 3, 4, 5];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];  // Explicitly modifying 'total' with each iteration
}

console.log(total);  // Output: 15
```

> Declarative programming focuses on what should be achieved rather than specifying the steps to achieve it. It abstracts away the control flow and state management, allowing the programmer to express the logic at a higher level.

```java
// Declarative approach to summing an array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
//  instead of manually defining a loop, you declare what you want to do (sum the array), and the reduce method handles the details of iteration and accumulation.

console.log(sum);  // Output: 15
```


#### Callback Function:
> A callback function is a function that is passed as an argument to another function and is executed (or "called back") after a certain task is completed. Callback functions are commonly used to handle asynchronous tasks like API calls, reading files, or handling user inputs in a non-blocking manner.

```java
function greet(name) {
  console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = "John";
  callback(name);  // 'greet' is the callback function
}

// Passing the 'greet' function as a callback
processUserInput(greet);  // Output: "Hello, John"
```

* **Key Characteristics of a Callback Function:
1. Passed as an Argument: A callback is passed as a parameter to another function.
2. Executed After Completion: It is usually invoked once the function it was passed into has finished some operation.
3. Can be Asynchronous: Callbacks are widely used in asynchronous programming, such as making HTTP requests or waiting for user input.