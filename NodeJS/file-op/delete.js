const { unlinkSync, unlink } = require("fs");

const fileName = "abcd.txt";

// // synchronous
// try {
//   unlinkSync(fileName);
// } catch (err) {
//   console.log("could not deleted");
// }

// // asynchronous
unlink(fileName, () => {
  console.log("deleted...");
});
