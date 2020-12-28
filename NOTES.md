# nepsjscourse

## general

### exercises

It would be nice to see the error message in case of a runtime error.

## JS course

### development environment

maybe mention the VSCode docu for JavaScript: 
* https://code.visualstudio.com/Docs/languages/javascript
* https://code.visualstudio.com/docs/nodejs/working-with-javascript

### variable declaration

* state the scope names: 
var -> function scope (if declared in function);
let -> block scope;
const -> block scope;
* [FIXED] typo: dynamically typed language
* [FIXED] Let (with capital letter) in last code

### printing values

* [FIXED] typo: missing " in first code snippet

### data input

* say that NodeJS uses CommonJS modules
* always use const for imported modules
* [FIXED] typo: inpuit.txt

### comments and decision structure

* [FIXED] two == for equality, tree === for strict/type equality
* better: const for imported modules; let for variables

### repetition structure

* [FIXED] "indice" instead of index in the code exmaples
* [FIXED] first sentence after "For (with counter)" heading

### string

* [FIXED] string1[4] will generate the output 'o', not 'N'
* [FIXED] for loop output -> hello
* "everything is an object in JavaScript" __Not true__ in the context of data types. There are primitive data types (number, bigint, string, boolean, symbol, undefined, null (<-controversial)) and reference data types = objects (function, Array, Error, ...).
However, wrapper objects (String, Number, Boolean) are implicitly used to provide functions and properties for primitives. But primitives still keep their primitive data type (typeof "test" --> 'string'). Only strings created with the String contrustor are real objects (typeof new String('test') --> 'object').
* maybe link to [String docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
* [FIXED] translation error in last code exmaple

### list

* provide link to [Array docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [FIXED] missing bracket in 2nd listing
* explain why the values are different: array (=object) is a ref. data type
* [FIXED] ... using a for _loop_
* [FIXED] ... methods provided by the _Array_ class (not string class)
