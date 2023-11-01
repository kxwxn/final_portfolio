const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");
const tokyoData = require("./data/datas.json");

app.use(cors());

app.get("/api/tokyo", (req, res) => {
  res.send(tokyoData);
});

app.listen(port, () => {
  console.log("server is running on port number 3003!");
});
