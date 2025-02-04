const readline = require("readline");

const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What do you think about Node.js:", (ans) => {
  console.log("Feedback:", ans);
  rl.close();
});
