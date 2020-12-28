const fs = require("fs");

let input = fs.readFileSync(0, "utf8");
let number = parseInt(input);

let dividers = [];
for(let i=1; i<=number; i++) {
    if( (number % i) === 0 ) dividers.push(i);
}
console.log(dividers.join(' '));