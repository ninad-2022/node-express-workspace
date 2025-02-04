// import fs from "fs" //Es6
const fs = require("fs"); //commonjs

const path = require("path");

const fileName = "abcd.js";

// to check weather file exists or not
if (fs.existsSync(fileName)) {
  console.log(fileName + " File exists ");
} else {
  console.log(fileName + " File does not exists");
}

// it give true or false value
// console.log(fs.existsSync(fileName));

// // checking path
console.log(path.extname(fileName));

// console.log(path.extname("file.js"));
