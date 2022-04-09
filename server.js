const express = require("express");
const blogs = require("./data/blogs");
const morgan = require("morgan");

const app = express();

app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// GET /
app.get("/", (req, res) => {
  res.render("index", { title: "Home", blogs });
});

// GET /about
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//create a blog
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

//GET 404 page
app.get("*", (req, res) => {
  res.render("404", { title: "404" });
});
