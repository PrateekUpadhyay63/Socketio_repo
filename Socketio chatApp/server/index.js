const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const PORT = process.env.PORT || 5011;
const router = require("./router");
const { Socket } = require("dgram");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("New Connection");
  socket.on("disconnect", () => {
    console.log("User left");
  });
});

app.use(router);
server.listen(PORT, () => console.log(`Server hat started on post ${PORT}`));
