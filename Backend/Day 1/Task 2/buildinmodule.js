/*
Task 2 first phase
*/

const os = require("os");
console.log("Operating System Info");
console.log("Platform:", os.platform());
console.log("Cpu Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
/*
Output
Operating System Info
Platform: win32
Cpu Architecture: x64
Total Memory: 4180762624
Free Memory: 533450752
*/
