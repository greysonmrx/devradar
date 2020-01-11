const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const routes = require("./routes.js");
const { setupWebsocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect("mongodb://localhost:27017/devradar", {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(5000);
