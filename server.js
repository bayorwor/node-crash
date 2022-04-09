const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// GET /
app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile("./view/index.html", { root: __dirname });
});

// GET /about
app.get("/about", (req, res) => {
  res.sendFile("./view/about.html", { root: __dirname });
});

// GET redirect
app.get("/redirect", (req, res) => {
  res.redirect("/about");
});

//GET 404 page
app.get("*", (req, res) => {
  res.sendFile("./view/404.html", { root: __dirname });
});
