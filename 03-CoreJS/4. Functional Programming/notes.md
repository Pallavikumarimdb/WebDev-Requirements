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

## Higher Order Function:
> A higher-order function is a function that does at least one of the following:

1. Takes one or more functions as arguments (i.e., it can accept a function as a parameter).
2. Returns a function as its result.

> Higher-order functions are a key feature of functional programming and are commonly used in JavaScript to make code more flexible and reusable.

Example of Higher-Order Functions:

1. Function that takes another function as an argument:

```js
function higherOrderFunction(callback) {
    console.log("Before executing callback");
    callback();  // The function passed as an argument is called here
    console.log("After executing callback");
}

function sayHello() {
    console.log("Hello!");
}

// Passing `sayHello` as an argument to `higherOrderFunction`
higherOrderFunction(sayHello);

// Output:
// Before executing callback
// Hello!
// After executing callback
```

2. Function that returns another function:

```js

function createMultiplier(multiplier) {
    return function (value) {
        return value * multiplier;  // The returned function uses the `multiplier`
    };
}

const multiplyByTwo = createMultiplier(2);
const multiplyByFive = createMultiplier(5);

console.log(multiplyByTwo(10));  // Output: 20
console.log(multiplyByFive(10)); // Output: 50
```


#### Common Higher-Order Functions in JavaScript:
> Many built-in JavaScript methods are higher-order functions, especially those dealing with arrays.

#### 1. map():

```js
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);  // Output: [1, 4, 9, 16]
```

#### Equivalent for Loop Version:

```js

const numbers = [1, 2, 3, 4];
const doubled = [];  // Create an empty array to store the results

for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);  // Apply the operation and store it in the new array
}

console.log(doubled);  // Output: [2, 4, 6, 8]
```


#### 2. filter():
> Takes a function that returns a boolean and creates a new array with elements that pass the test.

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);  // Output: [2, 4, 6]
```

#### 3. reduce():
> Takes a function and reduces the array to a single value by applying the function to each element cumulatively.

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => total + num, 0);
// acc:- accumulator same as we initialize value "let sum=0;"

console.log(sum);  // Output: 10
```

Ex-2:
```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function(acc, num) {
  let updateSum=acc+num;
  return updateSum;
}, 0); // here 0 i.e acc value will be updated with new value updateSum
```


#### 4. find()
> Returns the first element in the array that satisfies the condition. If no element matches, it returns undefined.

```js

const numbers = [10, 20, 30, 40, 50];

const result = numbers.find(num => num > 25);
console.log(result);  // Output: 30 (the first number greater than 25)
```

#### 5. findIndex()
> Returns the index of the first element in the array that satisfies cond. If no element matches, it returns -1.

```js

const numbers = [10, 20, 30, 40, 50];

const index = numbers.findIndex(num => num > 25);
console.log(index);  // Output: 2 (index of the first number greater than 25)
```

#### 6. some()
> Tests whether at least one element in the array passes the test implemented by the provided function. It returns true if at least one element satisfies the condition; otherwise, it returns false.

```js
const numbers = [10, 20, 30, 40, 50];

const hasLargeNumber = numbers.some(num => num > 35);
console.log(hasLargeNumber);  // Output: true (because 40 and 50 are greater than 35)
```

#### 7. every()
> Tests whether all elements in the array pass the test implemented by the provided function. It returns true if every element satisfies the condition; otherwise, it returns false.

```js
const numbers = [10, 20, 30, 40, 50];

const allGreaterThan5 = numbers.every(num => num > 5);
console.log(allGreaterThan5);  // Output: true (because all numbers are greater than 5)

const allGreaterThan25 = numbers.every(num => num > 25);
console.log(allGreaterThan25);  // Output: false (because 10 and 20 are not greater than 25)
```

#### forEach():
> The forEach() method in JavaScript is used to iterate over an array and execute a provided function once for each array element. Unlike map() or filter(), forEach() does not return a new array—it simply performs the action on each element

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number * 2);
});

```

#### Note:
```js
> .toFixed(1)  // till 1 decimal place
```


### Advanced Techniques with Higher Order Functions:

#### 1. Function Composition (Chaining HOFs)
> Function composition involves chaining multiple higher order functions together to create more complex operations or transformations.

Example:
```js
const numbers = [1, 2, 3, 4, 5];

// Chaining map() and filter() to get even numbers squared
const result = numbers
  .filter(num => num % 2 === 0) // Filter even numbers
  .map(num => num * num); // Square each number
console.log(result); // Output: [4, 16]
```