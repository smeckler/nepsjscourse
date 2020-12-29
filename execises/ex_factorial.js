const fs = require("fs");

const number = parseInt(fs.readFileSync(0, "utf8"));
let result = 1;
for (let i = number; i > 0; i--) {
    result *= i;   
}
console.log(result);