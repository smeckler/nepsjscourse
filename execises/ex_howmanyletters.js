const fs = require("fs");

let input = fs.readFileSync(0, "utf8");
let [
    text,
    letter
] = input.split("\n");
let count = 0;
for (const char of text) {
    if(char === letter) count++;
}
console.log(count);