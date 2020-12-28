const fs = require("fs");

// solution without regex

const line = fs.readFileSync(0, "utf8");
const vowels = 'aeiou';
// only keep vowels in string
let vowelstring = [];
for (let i=0; i < line.length; i++) {
    const char = line[i];
    if(vowels.includes(char)) {
        vowelstring.push(char);
    }
}
// check if anagram
const leftright = vowelstring.join('');
const rightleft = vowelstring.reverse().join('');
if(leftright === rightleft) {
    console.log('S');
} else {
    console.log('N');
}