import express from 'express';
import { WebSocketServer } from 'ws';

const app=express();
const port=8080;

const server = app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})

const wss = new WebSocketServer({server});

//if you want to use different port for web socket
// const wss = new WebSocketServer({port:3000});

wss.on("connection", (ws)=>{
    ws.send("Welcome to the server!");
    ws.on("message", (data)=>{
        console.log("data from client : ", data.toString());
        ws.send("message received!");
        ws.send("thank you for messaging!");
    })
})