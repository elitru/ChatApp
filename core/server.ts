import express from "express";
import * as socketio from "socket.io";
import * as path from "path";

const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.static('../web'));

io.on("connection", function(socket: any) {
  console.log("a user connected");
});

const server = http.listen(12345, function() {
  console.log("listening on *:12345");
});