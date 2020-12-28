const fs = require("fs");

let input = fs.readFileSync(0, "utf8");
let lines = input.split("\n");
let a_length = parseInt(lines[0]);
let a_width = parseInt(lines[1]);
let b_length = parseInt(lines[2]);
let b_width = parseInt(lines[3]);
let a_area = a_length * a_width;
let b_area = b_length * b_width;
console.log((a_area > b_area) ? a_area : b_area);
