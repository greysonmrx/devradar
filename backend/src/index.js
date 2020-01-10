const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes.js");

const app = express();

mongoose.connect("mongodb://localhost:27017/devradar", {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(5000);
