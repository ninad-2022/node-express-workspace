const { Code } = require("@mui/icons-material");
const { readFile, readFileSync, watchFile } = require("fs");

const fileName = "abcd.txt";

// // synchronously
// try {
//   const data = readFileSync(fileName, "utf-8");
//   console.log("Data:-", data);
// } catch (err) {
//   console.log(err);
// },

// // asynchornous
readFile(fileName, "utf-8", (err, data) => {
  if (err) console.log("could not read data" + err);
  else console.log("Data", data);
});

readFile(fileName, "char-code", (data, err) => {});

watchFile(fileName, (curr, prev) => {
  // birth time
  console.log("prev created time ", prev.birthtime);
  console.log("curr created time ", curr.birthtime);

  // modified time
  console.log("prev created time ", prev.mtime);
  console.log("curr created time ", curr.mtime);

  // access time
  console.log("prev created time ", prev.atime);
  console.log("curr created time ", curr.atime);
});
