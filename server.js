const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  //   console.log("Request was made: " + req.url);

  //lodash
  const randomNum = _.random(0, 10);
  console.log(randomNum);

  let greetings = _.once(() => {
    console.log("I can only be called once");
  });

  greetings();
  //   greetings();

  //set a response header
  res.setHeader("Content-Type", "text/html");

  //routting a request
  let path = "./view/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    //redirecting to a new page
    case "/about-me":
      res.statusCode = 302;
      res.setHeader("Location", "/about");
      res.end();
      break;
    case "/contact":
      path += "contact.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //serving an HTML file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

const port = 3000 || process.env.PORT;

server.listen(port, "localhost", () =>
  console.log("Server is listening on port " + port)
);
