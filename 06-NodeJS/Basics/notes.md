<h1 align="center"> Introduction to NodeJS  </h1> 

Node.js was first created by Ryan Dahl in 2009, about 13 years after Netscape's first server-side JavaScript environment, LiveWire Pro Web was introduced. The first version of Node.js supported Linux and Mac OS X.

Node.js is an open-source framework for building fast and scalable server-side JavaScript applications.

### Node.js Features:

1. Single-threaded:
>This means that everything from receiving the request to performing the tasks to sending the response to the client is executed in a single thread. This feature prevents reloading and reduces context switching time.

2. Highly Scalable: 
> Node.js applications are highly scalable because they run asynchronously. Node.js can efficiently handle concurrent requests while balancing all active CPU cores.

3. Cross-Platform Compatibility: 
> Node.js can be used on a wide variety of systems, from Windows to Mac OS, Linux, and even mobile platforms.

4. Asynchronous: 
> Node.js is asynchronous by default i.e. that a server built using Node.js does not need to wait for the date from an API. In other words, Node.js works in a non-blocking way, that does not block the execution of any further operation. 

### What is Node.js Used For?
Data Streaming<br>
Server-side rendering<br>
Command Line Tools<br>
Desktop Apps<br>
Embedded systems<br>


# V8 Engine Javascript
Chrome V8 or just V8 is an open-source Javascript and WebAssembly engine developed by Google, written in C++. The V8 engine was initially built for the Chromium-based browsers and Chrome browsers to improve the performance of javascript execution, but the latest versions can execute javascript code either within or outside the browser, which enables server-side scripting. 

A javascript engine is a program that takes your javascript code as input and generates machine executable code or bytecode.Anyone can write a JS engine as long as they follow the standard set by the ECMAScript standards.

### Preparing the Source Code
Host environment 
>In our context, the host environment is the browser. 
V8 engine

### Why Do We Need a Host Environment?
A host environment provides everything that a JavaScript engine depends on:

    Call stack
    Heap
    Callback queue
    Event loop
    Web API and Web DOM

### What is Sandboxing?
> A sandbox is an environment for running software that is isolated and separated from other environments, even those on the same computer.<br>
In Chrome V8, each process is sandboxed, which ensures that JavaScript functions run separately on it, and the execution of one piece of code does not affect any other piece of code and at the same time makes sure that this does not slow down performance which makes sandboxing a key feature of Chrome V8.


