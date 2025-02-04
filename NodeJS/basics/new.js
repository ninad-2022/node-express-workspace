const os = require("os");
const path = require("path");

const osInfo = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(path.basename());
