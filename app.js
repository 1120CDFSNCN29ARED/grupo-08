require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server running at port " + PORT);
});

const staticFolder = path.resolve(__dirname, "./public");
app.use(express.static(staticFolder));

app.get("/", (req, res) => {
  let htmlPath = path.join(__dirname, "/views/home.html");

  res.sendFile(htmlPath);
});

app.get("/product", (req, res) => {
  let htmlPath = path.join(__dirname, "/views/product.html");

  res.sendFile(htmlPath);
});

app.get("/fonts", (req, res) => {
  let htmlPath = path.join(__dirname, "/views/fonts.html");

  res.sendFile(htmlPath);
});

app.get("/register", (req, res) => {
  let htmlPath = path.join(__dirname, "/views/register.html");

  res.sendFile(htmlPath);
});

app.get("/login", (req, res) => {
  let htmlPath = path.join(__dirname, "/views/login.html");

  res.sendFile(htmlPath);
});
