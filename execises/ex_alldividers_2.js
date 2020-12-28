const fs = require("fs");

let input = fs.readFileSync(0, "utf8");
let number = parseInt(input);

console.log(
    new Array(number+1).fill(0).map((_, i) => i)
    .filter( (v,idx) => (number % idx) === 0 )
    .join(' '));