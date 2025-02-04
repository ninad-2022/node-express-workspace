const EventEmitter = require("events");
const fs = require("fs");
const path = require("path");

class FileWatcher extends EventEmitter {
  watchDir(dir) {
    fs.readdir(dir, (err, files) => {
      if (err) throw err;
      files.forEach((file) => {
        const filePath = path.join(dir, file);
        fs.stat(filePath, (err, stats) => {
          if (err) throw err;
          if (stats.isFile()) {
            this.emit("file", filePath);
          } else if (stats.isDirectory()) {
            this.watchDir(filePath);
          }
        });
      });
    });
  }
}

const fileWatcher = new FileWatcher();
fileWatcher.on("file", (filePath) => {
  console.log(`new file detected:${filePath}`);
});

fileWatcher.watchDir("\new.js");
