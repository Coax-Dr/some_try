const express = require("express");

const app = express();

app.all("*", (req, res, next) => {
  // 允许接受来自另一个端口的请求
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
})

app.get("/anotherService", (req, res) => {
  res.json({ code: 0, msg: "这是8003端口返回的" });
})

app.listen(8003, () => console.log("Server is runing at port 8003"))