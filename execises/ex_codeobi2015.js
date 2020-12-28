const fs = require("fs");

let input = fs.readFileSync(0, "utf8");
let seq = input.split("\n")[1];
// bad solution without regex
while (seq.indexOf(' ') > 0) {
    seq = seq.replace(' ', '');
}
let count = 0;
for (let i = 0; i < seq.length; i++) {
    const threechar = seq.substring(i,i+3);
    if(threechar === '100') count++;
}
console.log(count);