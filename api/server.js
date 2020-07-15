const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const userRouter = require('../router/users/usersRouter');
const matExerRouter = require('../router/exercises/matExerRouter');
const refExerRouter = require('../router/exercises/refExerRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api/users", userRouter);
server.use("/api/matExers", matExerRouter);
server.use ("/api/refExers", refExerRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: "pilates node api is running" })
})

module.exports = server;
