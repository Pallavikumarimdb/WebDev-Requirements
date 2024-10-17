## Number

#### To check data type:
> typeof 8.9 // number


## String 
> Template literals are literals delimited with backtick ( ` ) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.

## String to Number

### One of the way to convert string to number

> '100' -- string <br/>
> '-100' -- string<br/>
> + '100' -- number (Js thinks we are adding it hence conver to number)<br/>
> - '100' -- number : -100<br/>
> It only works for + and -

> + 'Pallavi' // NaN(Not a number)<br/>
> typeof NaN   // numberv


### 2nd Way of converting string to number
> + '100ashsfdf'  // NaN<br/>
> parseInt('100ashsfdf)   // 100<br/>
> parseInt(10ashsfdf0kfj)  // 10<br/>
parseInt(sdn10sdmnff)   //NaN<br/>



### Converting number to string
> 100 + ' '   // '100'


## Boolean

> true / false<br/>
typeof true  // 'boolean'<br/>

> +false // 0<br/>
> +true  //1<br/>

## undefined
> keyword in Js<br/>
> A variable that has not been assigned a value is of type undefined<br/>
> typeof undefined  // undefined<br/>

## null

> The null value represents the intentional absence of any object value.<br/>
> Similar to undeined but diff. is Js can't use null by itself user has to assing value null.

> +null  // 0<br/>
> +undefined  // NaN<br/>
> parseInt(undefined)  // NaN<br/>

> typeof null   // 'object'<br/>
>Null. In JavaScript null is "nothing". It is supposed to be something that doesn't exist. Unfortunately, in JavaScript, the data type of null is an object. 
In JavaScript, null is a primitive value. However, typeof returns "object". This is a well-known bug in JavaScript and has historical reasons.


## BigInt
> JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number. <br/>

> let x = BigInt(999999999999999);

## Symbol
>JavaScript Symbol is a primitive data type, just like Number, String, Boolean, etc. It represents a unique identifier and can be used in various ways. Symbols are used to create object properties, for example, when you want to assign a unique identifier to an object.
