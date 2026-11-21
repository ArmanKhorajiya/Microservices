const fs = require("fs");

fs.writeFileSync("message.txt", "Hello Arman!");

const data = fs.readFileSync("message.txt", "utf8");

console.log(data);
