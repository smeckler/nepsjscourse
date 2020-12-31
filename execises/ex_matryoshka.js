const fs = require('fs')

const delimiter = ' ';
const asc = (a,b) => a-b;

const lines = fs.readFileSync(0,'utf8').split('\n');

const dolls = lines[1].split(delimiter).map(Number);
const dolls_sorted = [...dolls].sort(asc);

let picks = [];
for (let i = 0; i < dolls.length; i++) {
    const doll = dolls[i];
    if(doll != dolls_sorted[i]) {
        picks.push(doll);
    }
}
console.log(picks.length);
console.log(picks.sort(asc).join(delimiter));