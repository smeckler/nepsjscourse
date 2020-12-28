const fs = require("fs");

const line = fs.readFileSync(0, "utf8");

const leftright = line.replace(/[^aeiou]/ig,'');
const rightleft = [...leftright].reverse().join('');
console.log(leftright === rightleft ? 'S' : 'N');