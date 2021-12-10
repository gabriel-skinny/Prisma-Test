import "dotenv/config";
import express, { response } from 'express';
import { Server } from "socket.io";
import http from "http";
import cors from "cors";

import { router }  from "./routes";

const PORT = 3333;

const app = express();
app.use(cors());

const serverHtpp = http.createServer(app);

const io = new Server(serverHtpp, {
  cors: {
    origin: "*"
  }
});

io.on("connection", socket => {
  console.log("Usuario connected", socket.id);
})

app.use(express.json());
app.use(router);

app.get("/github", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );

app.get("/singin/callback", (req, res) => {
  const { code } = req.query;

  return res.json(code);
})

})

export { serverHtpp, io, PORT };

