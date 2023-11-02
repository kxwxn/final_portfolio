const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");
const tokyoData = require("./data/tokyo.json");
const path = require("path");

app.use(cors());

// app.use("/assets", express.static("assets"));

const assetsPath = path.join(__dirname, "assets");
app.use("/assets", express.static(assetsPath));

app.get("/api/tokyo", (req, res) => {
  res.json(tokyoData);
});

app.listen(port, () => {
  console.log("server is running on port number 3003!");
});
