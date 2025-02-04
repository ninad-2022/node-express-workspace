const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for worker exit event
  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `Worker ${worker.process.pid} died with code ${code} and signal ${signal}`
    );
    console.log("Forking a new worker");
    cluster.fork();
  });
} else {
  console.log(`Worker process ${process.pid} started`);

  // Create Express app
  const express = require("express");
  const app = express();

  // Define routes
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // Start server
  const server = app.listen(8000, () => {
    console.log(
      `Worker process ${process.pid} listening on port ${server.address().port}`
    );
  });
}
