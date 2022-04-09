const fs = require("fs");

// Read the file
const readStreams = fs.createReadStream("./data/bigdata.txt", {
  encoding: "utf8",
});

const writeStreams = fs.createWriteStream("./data/bigdata1.txt");

readStreams.on("data", (chunk) => {
  console.log("____________SET TIMEOUT____________");
  console.log(chunk);
  writeStreams.write("\n____________NEW__DATA__INSERTED____________\n");
  writeStreams.write(chunk);
});

// using a pipe
const writeStreams1 = fs.createWriteStream("./data/bigdata2.txt");
readStreams.pipe(writeStreams1);
