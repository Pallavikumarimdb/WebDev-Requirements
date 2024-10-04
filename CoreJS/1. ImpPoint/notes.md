
> REPL -Read Evaluate Print Loop (Console in browser)

> Up arrow of keyboard to get cleared data in console and Down for vice versa.

> Clear() or ctrl+l for clear the data from console.

> Directly we can't write 5+6 in script.js file it only works on console.  

> Download 'JavScript(ES6)' plugin in VS code for autocorrect.

In programming, a closure is a combination of a function and its lexical environment.

The lexical environment consists of any variables that were in scope at the time the closure was created.


### Closure:
> Closures in JavaScript are functions that retain access to variables from their containing scope even after the parent function has finished executing. They’re useful for maintaining private data, creating modular code, and implementing callback functions with persistent state. 
```js
function foo() {
    let b = 1;
    function inner() {
        return b;
    }
    return inner;
}
let get_func_inner = foo();

console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner());
```

> We can access the variable b which is defined in the function foo() through function inner() as the later preserves the scope chain of the enclosing function at the time of execution of the enclosing function i.e. the inner function knows the value of b through its scope chain. 
This is closure in action that is inner function can have access to the outer function variables as well as all the global variables.

> Note: Closure is the concept of function + lexical environment in which function it was created. so every function declared within another function then it has access to the scope chain of the outer function and the variables created within the scope of the outer function will not get destroyed.