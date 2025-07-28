/*
Task 3 
*/
const fs = require("fs");
const action = process.argv[2];
const filename = process.argv[3];
const content = process.argv[4];
if (action === "read") {
  const data = fs.readFileSync(filename, "utf8");
  console.log(data);
} else if (action === "write") {
  fs.writeFileSync(filename, content);
  console.log("File written");
} else if (action === "append") {
  fs.appendFileSync(filename, content);
  console.log("Content appended");
} else if (action === "delete") {
  fs.unlinkSync(filename);
  console.log("File deleted");
} else {
  console.log("Please use: read | write | append | delete");
}
