const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  // without stram
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) return console.log(err);
  //     res.end(data.toString());
  //   });
  //METHOD:1  with streams
  // const rstream = fs.createReadStream("input.txt");
  //   rstream.on("data", (data) => {
  //     res.write(data);
  //   });
  //   rstream.on("end", () => {
  //     res.end();
  //   });
  //   rstream.on("error", (err) => {
  //     console.log(err);
  //     res.end("No such file");
  //   });

  //METHOD: 2 with pie
  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");
