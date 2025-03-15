import express from "express";
import { PeerServer } from "peer";

const app = express();
const PORT = process.env.PORT || 9000;

// Serve PeerJS server
const peerServer = PeerServer({
  port: PORT,
  path: "/myapp",
  allow_discovery: true, // Allows clients to discover each other
});

app.use("/", (req, res) => {
  res.send("PeerJS Server is running 🚀");
});

console.log(`PeerJS server running on port ${PORT}`);
