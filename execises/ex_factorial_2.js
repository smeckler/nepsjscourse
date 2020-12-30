const fs = require("fs");

const number = parseInt(fs.readFileSync(0, "utf8"));
let result = Array(number).fill(0).reduce( (prev,_,idx) => prev*(idx+1), 1);
console.log(result);