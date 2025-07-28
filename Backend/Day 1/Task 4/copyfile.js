"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var events_1 = require("events");
var emitter = new events_1.EventEmitter();
emitter.on("copy", function () {
    var readStream = fs.createReadStream("source.txt");
    var writeStream = fs.createWriteStream("target.txt");
    readStream.on("error", function (err) {
        console.error("Error reading the source file:", err.message);
    });
    writeStream.on("error", function (err) {
        console.error("Error writing to the target file:", err.message);
    });
    readStream.pipe(writeStream);
    console.log("File copied!");
});
emitter.emit("copy");
