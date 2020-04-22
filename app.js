const express = require("express");
// const router = require("router");
const bodyParser = require("body-parser");
const calculationRouter=require("./router")

const app = express();
app.use(bodyParser.json());

app.use(calculationRouter);

app.listen(2300, () => {
  console.log("server is running from 2300");
});
