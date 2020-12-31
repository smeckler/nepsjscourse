const fs = require("fs");

let input = fs.readFileSync(0, "utf8");
let [
    candy,
    ...p1p2p3
] = input.split("\n");
let pokemons = p1p2p3.map(Number).sort( (a,b)=>a-b ) // asc
let count = 0;
for (let i = 0; i < pokemons.length; i++) {
    const p = pokemons[i];
    if(p <= candy) {
        candy -= p;
        count++;
    }
}
console.log(count);