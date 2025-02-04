const { readdirSync, statSync } = require("fs");

const pathRef = "../";

// readdirSync will give you file by taking its path
const list = readdirSync(pathRef);

for (const val of list) {
  if (statSync(`${pathRef}${val}`).isFile()) console.log("vale is file", val);
  else console.log("it is a directory", val);
}
