import { io } from "./server1.js";

export const notify= (req, res) => {
    const content ="New notification reached.";
    io.emit("notifyClient", content);
    res.status(200).json({ message: "Client has been notified." });
  };