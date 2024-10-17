<h1 align="center">Object Oriented JavaScript</h1>

# Object Oriented JavaScript
> Object-Oriented programming(OOP) is a programming model that organizes software design around data, or object, rather than function and logic. An object canbe defined as a data field that has unique atributes and behaviour.

### The Four Pillars of OOPs are:
1. Encapsulation
2. Abstract
3. Polymorphosm
4. Inheritance

> javaScript is mpt actually an Object Oriented Language, but we can write object oriented code by using something called as a Prototype Object.

#### OOPs Module:
1. This Keyword
2. Constructor function
3. Classes
4. Classical Inheritance
5. Encapsulation
6. Polymorphosm
7. Prototype Object
8. Prototypal Inheritance
9. Call Apply Bind

#### What is the this keyword?
The this keyword in JavaScript is a special reference that points to the context in which a function is executed. Its value depends on how and where a function is invoked, and it can vary depending on the execution context.

> this keyword is used to reference the object.

#### Summary of this in Different Contexts:

1. Global scope: this refers to the global object (window in browsers, global in Node.js).
2. Inside an object method: this refers to the object itself.
3. In a constructor function: this refers to the newly created instance.
4. In an event handler: this refers to the element that triggered the event.
5. Arrow functions: this is lexically bound to the surrounding context.
6. In strict mode: this is undefined in functions that are not methods or constructors.

#### Key Differences Between Strict Mode and Non-Strict Mode:
In non-strict mode, some errors are silently ignored by JavaScript. In strict mode, these errors are thrown explicitly, helping developers catch them earlier.

```js

// Non-strict mode:
x = 10;  // No error, creates a global variable

// Strict mode:
"use strict";
x = 10;  // Error: `x` is not defined (you must declare variables)
```

### 'this' with node js (non strict mode)

```js
// Global Context (Outside of Any Function)
console.log(this);  // Output: {}


//  Inside a Function (Non-strict Mode)
function showThis() {
    console.log(this);
}

showThis();  // Output: global object


// Inside an Object Method
const person = {
    name: "Alice",
    greet: function() {
        console.log(this.name);  // Refers to the `person` object
    }
};

person.greet();  // Output: Alice


// Constructor Function
function Person(name) {
    this.name = name;
}

const person1 = new Person("John");
console.log(person1.name);  // Output: John
```

### 'this' in node (strict):

```js
"use strict";

// Global Context (Strict Mode)
"use strict";

console.log(this);  // Output: undefined


//  Inside a Regular Function

"use strict";

function showThis() {
    console.log(this);
}

showThis();  // Output: undefined


// Inside an Object Method

"use strict";

const person = {
    name: "Alice",
    greet: function() {
        console.log(this.name);
    }
};

person.greet();  // Output: Alice


// Constructor Function

"use strict";

function Person(name) {
    this.name = name;
}

const person1 = new Person("John");
console.log(person1.name);  // Output: John

```