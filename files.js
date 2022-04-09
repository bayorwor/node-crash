const { readFile, writeFile, mkdir, rmdir, existsSync, unlink } = require("fs");

// Read the file
readFile("./data/text.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const res = data.toString();
    console.log(res);
  }
});

//create a file
writeFile("./data/text1.txt", "We are learning nodejs", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created");
  }
});

//create a directory
mkdir("./data/new-dir", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Directory created");
  }
});

//delete a directory
rmdir("./data/new-dir", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Directory deleted");
  }
});

//check if a file exists
if (existsSync("./data/text.txt")) {
  console.log("File exists");
} else {
  console.log("File does not exist");
}

//delete a file
if (existsSync("./data/text1.txt")) {
  unlink("./data/text1.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File deleted");
    }
  });
}

//check if a directory exists
if (existsSync("./data/new-dir")) {
  console.log("Directory exists");
} else {
  console.log("Directory does not exist");
}
