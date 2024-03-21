// import express from "express";
// import WebSocket from "ws";

// const app = express();
// const port = 4000;

// const server = app.listen(port, () => {
//   console.log(`Server 2 is running on port http://localhost:${port}`);
// });

// const ws = new WebSocket("ws://localhost:3000");

// ws.on("open", function open() {
//   console.log("Server 2: connected to Server 1");
//   ws.send("Hello from Server 2");
// });

// ws.on("message", function incoming(message) {
//   console.log("Server 2 received message :", message.toString());
// });

import express from "express";
import socketIoClient from "socket.io-client";

const app = express();
const port = 4000;

const socket = socketIoClient("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected to Server 1");

  socket.emit("message", "Hello from Server 2");
});
  
socket.on("notifyClient", (notification) => {
  console.log("Received notification from Server 1:", notification);
});

app.listen(port, () => {
  console.log(`Server 2 is running on port http://localhost:${port}`);
});
