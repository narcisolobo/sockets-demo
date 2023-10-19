import chalk from 'chalk';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { Server as SocketServer } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const app = express();
const port = process.env.PORT;
const print = console.log;

app.use(cors());

const httpServer = app.listen(port, () =>
  print(chalk.cyanBright(`Listening on PORT: ${port}`))
);

const io = new SocketServer(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: '*',
    credentials: true,
  },
});

io.on('connection', (socket) => {
  print(chalk.greenBright(`New user connected: ${socket.id}`));
  socket.on('chat-message', (message) => {
    print(message);
    const chatMessage = {
      id: uuidv4(),
      ...message,
    };
    socket.broadcast.emit('chat-message', chatMessage);
  });
});
