const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());

app.use(apiRouter);

module.exports = app;
