const fs = require("fs");

// read input
const input = fs.readFileSync(0, "utf8");
const lines = input.split("\n");
const pushes = lines[1].split(/\s/).map(Number);

let A = false;
let B = false;
for (let i = 0; i < pushes.length; i++) {
    if (pushes[i] == 1) {
        A = !A;
    }
    else if (pushes[i] == 2) {
        A = !A;
        B = !B;
    }
}
console.log(A ? 1 : 0);
console.log(B ? 1 : 0);
