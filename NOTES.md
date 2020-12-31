# nepsjscourse

## general notes

**lessons**
* redirect to lesson page after text edit

**exercises**
* It would be nice to see the error message in case of a runtime error.
* PROs can see exactly where they got it wrong. Download the first wrong test case below: NOT AVAILABLE

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

### objects

* maybe add: The direct declaration of objects with curly brackets is known as 'object literal notation' and is used for single-use objects.

### functions

* I would add an explanation of function expressions between the regular functions section and the part about arrow functions
* [FIXED] missing back tick in last code example
* [FIXED] last sentence bold format

### libraries and npm

* LIbraries in the title
* [FIXED] bold formatting at 2nd sentence; grammar (we can ... _installs_ it)
* include link to [npm docs](https://docs.npmjs.com/)
* "let’s initialize the npm in our directory" npm init creates a package (=project). I would suggest "let's create a new package/project in our directory. To do this, ..."
* maybe link to [moment](https://www.npmjs.com/package/moment) and chalk packages
* [FIXED] first date code (DD/MM/YYY -> DD/MM/YYYY)
* [FIXED] last passage

### sort and filter

* [FIXED] typo in "The default sorting is will be done ..."
* [FIXED] last sentence bold format
* add links to the documentation of the [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) and filter methods

### classes

* [FIXED] age() method, not act()
* [FIXED] output in last code exmaple

### execise 'matryoshka'

I had a hard time solving this execise because I interpreted the collecting of the dolls in a different way. The easy solution was that Bea has to pick every doll that is on the wrong place compared to the sorted list. First, I thought that places can be left empty and it would still count as ordered. For example: If you have 1 66 3 8 99 2 123, you would only pick number 66 and 2, which results in the ordered sequence 1 _ 3 8 99 _ 123. Then Bea inserts the dolls in the right place, maybe even between two other dolls -> 1 __2__ 3 8 __66__ 99 123.
