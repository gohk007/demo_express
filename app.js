const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("It works...updated now from developer hai from github");
});

app.get("/product", (req, res) => {
  res.send("Product page");
});

app.get("/login", (req, res) => {
  res.sendFile("views/index.html", { root: __dirname });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 on port ${process.env.PORT || 3000}`);
});
