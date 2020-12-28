const fs = require("fs");

let input = fs.readFileSync(0, "utf8");
let seq = input.split("\n")[1]; // 2nd line
let match = seq.match(/1\s?0\s?0/g);
console.log(match ? match.length : 0);