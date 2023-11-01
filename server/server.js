const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");
const tokyoData = require("./data/datas.json");

app.use(cors());

app.use("/assets", express.static("assets"));

// app.use('/static', express.static(path.join(__dirname, 'public')))  --- 절대경로 , 그런데 작동하지 않고 오류남.

app.get("/api/tokyo", (req, res) => {
  res.json(tokyoData);
});

app.listen(port, () => {
  console.log("server is running on port number 3003!");
});
