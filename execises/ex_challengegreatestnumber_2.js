const fs = require("fs");

let input = fs.readFileSync(0, "utf8");
let numbers = input.split(/\s/).map(Number);

// console.log(numbers.reduce( (p,v) => { 
//     return p > v ? p : v;
// }, 0))
console.log(Math.max(...numbers));