const fs = require("fs");

let input = fs.readFileSync(0, "utf8");
let numbers = input.split(/\s/);
let max = 0;
for (let n of numbers) {
    if(Number(n) > Number(max)) max = n;
}
console.log(max)