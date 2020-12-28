const fs = require("fs");

fs.readFile(0, 'utf-8', (err, data) => 
    console.log(data
        .split('\n')
        .filter( (val, idx) => idx < 2)
        .map(line => parseInt(line))
        .reduce((prev, curr) => prev - curr))
);
