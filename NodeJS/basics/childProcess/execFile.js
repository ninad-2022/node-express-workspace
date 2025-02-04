const { execFile } = require("child_process");

//it puts the data into the buffer, use it for PWD command
execFile("/file.txt", (error, stdout, stder) => {
  if (error) {
    console.log(`error:- ${error}`);
    return;
  }
  if (stder) {
    console.log(`stder:- ${stder}`);
    return;
  }
  console.log(`stdout:- ${stdout}`);
});
