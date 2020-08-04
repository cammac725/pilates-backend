const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const userRouter = require('../router/users/usersRouter');
const matExerRouter = require('../router/exercises/matExerRouter');
const refExerRouter = require('../router/exercises/refExerRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use("/api/clients", userRouter);
server.use("/api/matExers", matExerRouter);
server.use ("/api/refExers", refExerRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: "pilates node api is running" })
})

module.exports = server;
