const fs = require("fs");

// recursive solution

const number = parseInt(fs.readFileSync(0, "utf8"));
console.log(fibo(number));

function fibo(n) {
    if(n < 0) {
        return 0;
    } else if(n <= 1) {
        return 1;
    } else {
        return fibo(n-1)+fibo(n-2);
    }
}