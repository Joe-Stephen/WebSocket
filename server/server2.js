import express from "express";
import { WebSocket } from "ws";

const app = express();
const port = 4000;

const server = app.listen(port, () => {
  console.log(`Server 2 is running on port http://localhost:${port}`);
});

const ws = new WebSocket("ws://localhost:3000");

ws.on("open", function open() {
  console.log("Server 2: connected to Server 1");
  ws.send("Hello from Server 2");
});

ws.on("message", function incoming(message) {
  console.log("Server 2 received message :", message.toString());
});
