const fs = require("fs");

let input = fs.readFileSync(0, "utf8");
let [
    a_length,
    a_width,
    b_length,
    b_width
] = input.split("\n");
let a_area = a_length * a_width;
let b_area = b_length * b_width;
console.log((a_area > b_area) ? a_area : b_area);
