const express = require("express");
const bodyParser = require("body-parser");
const routerFib = require("./router");

const app = express();
app.use(bodyParser.json());

app.use(routerFib)

app.listen(2300, () => {
  console.log("sever is running on 2300");
});
