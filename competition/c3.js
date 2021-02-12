const fs = require("fs");

// read input
let code = fs.readFileSync(0, "utf8");
let bracketstack = [];

for (let c of code) {
    if(c === '{') bracketstack.push('{');
    if(c === '}') {
        let b = bracketstack.pop();
        if(b == undefined) return console.log('N');
    }
}
console.log(bracketstack.length > 0 ? 'N' : 'S');