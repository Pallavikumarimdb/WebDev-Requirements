<h1 align="center" >TypeScript</h1>

TypeScript is a statically-typed superset of JavaScript, designed to enhance the development of large-scale applications. 


TypeScript code is written in .ts or .tsx files

##### TypeScript in Your Project
> npm install -g typescript  <br>
> tsc --version
##### To run
> npx tsc

### Type Declarations and Variables in TypeScript:
> TypeScript supports several types, including number, string, boolean, object, null, undefined, symbol, bigint, and any

1. number: 
> This type is used for numeric values. It can be an integer or floating-point value.

```ts
let age: number = 30;
let weight: number = 65.5;
```
2. string: 
> This type is used for textual data. It can be defined using single quotes, double quotes, or template literals.
```ts
let name: string = 'John Doe';
let greeting: string = `Hello, ${name}`;
```
3. boolean: This type is used for logical values. It can only be true or false.
```ts
let isAdult: boolean = true;
let isStudent: boolean = false;
```
4. object: 
> This type is used for complex data structures. An object can have properties and methods.
```ts
let person: object = { name: 'John Doe', age: 30 };
let date: object = new Date();
```
5. null: 
> This type has only one value: null. It is used when you want to explicitly set a variable to have no value or object.
```ts
let emptyValue: null = null;
let anotherEmptyValue: null = null;
```
6. undefined: 
> This type has only one value: undefined. It is used when a variable has been declared but has not yet been assigned a value.
```ts
let unassignedValue: undefined = undefined;
let anotherUnassignedValue: undefined;
```
7. symbol: 
> This type is used to create unique identifiers for objects.
```ts
let symbol1: symbol = Symbol('symbol1');
let symbol2: symbol = Symbol('symbol2');
```
8. bigint: 
> This type is used for whole numbers larger than 2^53 - 1, which is the upper limit for the number type.
```ts
let bigNumber: bigint = 9007199254740993n;
let anotherBigNumber: bigint = BigInt(9007199254740993);
```
9. any: 
> This type is used when the type of a variable could be anything. It is a way of opting out of type-checking.
```ts
let variable: any = 'I am a string';
variable = 42; // I am a number now
```