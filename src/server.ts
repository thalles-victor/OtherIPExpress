import express from "express";
import type { Request, Response } from "express";
import Path from "path";
import { networkInterfaces } from "os";

const app = express();
const path = Path;
const net = networkInterfaces();

app.use(express.json());

// Routers
app.get("/", (request: Request, response: Response) => {
  response.sendFile(path.join(__dirname, "page.html"));
}); //Send HTML

app.get("/user", (request: Request, response: Response) => {
  return {
    name: "thalles",
    age: "261",
    skills: "back end developer at nodejs",
  };
}); // Send JSON

/*---------------------------------------------------*/

// Network Server configuration
const PORT = 3000;
const LOCALHOST = "127.0.0.1";

const IP = net.enp2s0![0].address || LOCALHOST;

app.listen(PORT, IP, () => {
  console.log(`Server is running at http://${IP}:${PORT}`);
});
