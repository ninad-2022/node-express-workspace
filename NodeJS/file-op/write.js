const { writeFile, writeFileSync, appendFile } = require("fs");

// writeFile() & writeFileSync() it recreates the file
const fileName = "abcd.txt";
const data = " this is simple data ";

// // synchronously
// try {
//   writeFileSync(fileName, data);
//   console.log("written with writezfileSynce");
// } catch (err) {
//   console.log(err);
//   if (err) console.log("could not written file", err);
// }

// asyncronously
// writeFile(fileName, data, (err) => {
//   if (err) console.log("Could not written file by witeFileSynce", err);
//   else console.log("written by writeFileSynce..");
// });

appendFile(fileName, data, (err) => {
  if (err) console.log("could not written by appenFIle ", err);
  else console.log(" written by appendFile ");
});
