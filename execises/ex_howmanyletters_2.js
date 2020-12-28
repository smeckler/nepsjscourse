const fs = require("fs");

let input = fs.readFileSync(0, "utf8");
let [
    text,
    letter
] = input.split("\n");
let match = text.match(new RegExp(letter,'g'));
console.log(match ? match.length : 0);