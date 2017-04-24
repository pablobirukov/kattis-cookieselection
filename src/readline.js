var fs = require("fs");
var index = 1;

fs.readFileSync('./src/test3.ts').toString().split('\n').forEach(
    function (line) {
        console.log(line);
    }
);