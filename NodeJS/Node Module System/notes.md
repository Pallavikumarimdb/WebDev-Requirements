<h1 align="center"> Node Module System  </h1> 

###  The Global Object
> The Node.js Global Object is a built-in object that provides global variables and functions accessible throughout the Node.js runtime environment. It is analogous to the window object in browsers but tailored for server-side JavaScript. 

>Node.js Global Objects are the objects that are available in all modules. 

#### The Node.js Global Objects are listed below: 
1. Class
2. global:<br>
setTimeout()<br>
clearInterval()
3. TextEncoder
4. TextDecoder.. etc

### Modules and modularity
Every file in itself is module in nodejs.

1. Modules in Node.js:
> A module in Node.js is essentially a reusable block of code, like a function or a library, that is either built-in or user-defined.

```js
let name = 'pallavi';
console.log(global.name); // output: undefined because global can't access name. If two file has same variable name globle will conflict.
```

2. Modularity in Node.js:
> Modularity refers to breaking down a large application or codebase into smaller, self-contained units (modules) that can work independently but can also interact with each other.

```js
const require = path => {
  // ...
  return module.exports;  // Exporting the function
};
```
```js
const myFunction = require('./file1');  // Requiring the module
myFunction();  // Calling the function from the module
```

### Introduction to Node modules
> Node modules refer to reusable blocks of code in Node.js that encapsulate related functionality and can be imported and used in different parts of your application. These modules can be either built-in (provided by Node.js), third-party (installed via npm), or user-defined (custom modules created by developers).

1. Built-in Modules:
> * Child Process Module: child_process module allows you to create and control child processes with in a script, enabling you to execute system commands, run scripts, and perform other operations outside the main Node.js process.fork(), execFile()..

```js 
const cp = require('child_process');
cp.execSync('calc'); //open calculator
cp.execSync('start chrome'); // open chrome
cp.execpSync('start chrome https://www.linkedin.com/');
console.log('output '+ cp.execpSync('node script.js')); // run file
```

> fs (File System): For file operations like reading, writing, and updating files.
        
> http: For creating HTTP servers and making requests.
        
> path: For handling and transforming file paths.

> os: For getting operating system-related information.

2. Third-party Modules:
> express: A web framework for building APIs and web applications.

> mongoose: An object data modeling (ODM) library for MongoDB.

> lodash: A utility library for common JavaScript operations.

2. User-defined Modules:
> Each file in Node.js is treated as a module. You can define multiple modules in a project and import them using require().

