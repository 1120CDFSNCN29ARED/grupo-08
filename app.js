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
