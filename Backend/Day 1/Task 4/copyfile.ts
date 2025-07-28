import * as fs from "fs";
import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on("copy", () => {
  const readStream = fs.createReadStream("source.txt");
  const writeStream = fs.createWriteStream("target.txt");

  readStream.on("error", (err) => {
    console.error("Error reading the source file:", err.message);
  });

  writeStream.on("error", (err) => {
    console.error("Error writing to the target file:", err.message);
  });

  readStream.pipe(writeStream);
  console.log("File copied!");
});

emitter.emit("copy");
