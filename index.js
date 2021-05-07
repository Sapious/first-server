const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/test-test", (req, res) => {
  res.send("this is a test page");
});
const port = 8000;

app.listen(port, () => {
  console.log("this server yemchi 3al port" + port);
});
