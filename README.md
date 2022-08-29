# OtherIPExpress
```ts

import express from "express";
import { networkInterfaces } from "os";

const app = express();
const net = networkInterfaces();

// Network Server configuration
const PORT = 3000;
const LOCALHOST = "127.0.0.1";

const IP = net.enp2s0![0].address || LOCALHOST;

app.listen(PORT, IP, () => {
  console.log(`Server is running at http://${IP}:${PORT}`);
});
```
