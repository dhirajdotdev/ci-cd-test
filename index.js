import express from "express";
import os from "os";

const app = express();
const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
  return res.json({
    message: "Server is up",
    system: {
      platform: os.platform(),
      arch: os.arch(),
      type: os.type(),
      release: os.release(),
      uptime: `${Math.floor(os.uptime() / 3600)} hours`,
    },
    memory: {
      total: `${Math.round(os.totalmem() / 1024 / 1024 / 1024)} GB`,
      free: `${Math.round(os.freemem() / 1024 / 1024 / 1024)} GB`,
      available: `${Math.round((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024)} GB used`,
    },
    cpus: {
      count: os.cpus().length,
      model: os.cpus()[0]?.model,
    },
    processes: process.pid,
    nodeVersion: process.version,
  });
});


app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))