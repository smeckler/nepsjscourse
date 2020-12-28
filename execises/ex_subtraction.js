const fs = require("fs");

// Read input from the command line
let input = fs.readFileSync(0, "utf8");
let lines = input.split("\n");
let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
console.log(A - B);
