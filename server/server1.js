import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 3000;

const server = app.listen(port, () => {
  console.log(`Server 1 is running on port http://localhost:${port}`);
});

const wss = new WebSocketServer({ server });

wss.on("connection", function connection(ws) {
  console.log("Server 1: new web socket connection");
  ws.send("Welcome to Server 1.");
  ws.send("Your web socket connection with Server 1 is now active.");
  ws.on("message", function incoming(message) {
    console.log("Server 1 recieved message :", message.toString());
  });
});
