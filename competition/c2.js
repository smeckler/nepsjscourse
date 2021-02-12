const fs = require("fs");

// read input
const input = fs.readFileSync(0, "utf8");
const lines = input.split("\n");
const orders = lines[1].split(/\s/).map(Number); // 2nd line

let manufactured = 0;
let stock = new Map();
orders.forEach( order => {
    if(stock.get(order) == 1) {
        stock.set(order, 0);
    } else {
        manufactured = manufactured + 2;
        stock.set(order, 1);
    }
});
console.log(manufactured);