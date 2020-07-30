const router = require("express").Router();

const Clients = require('./usersModel');

router.get('/', (req, res) => {
  Clients.getUsers()
    .then(clients => {
      res.status(200).json(clients)
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Cannot retrieve clients from database." })
    })
})

router.get('/:id', (req, res) => {
  Clients.getById(req.params.id)
    .then(client => {
      res.json(client)
    })
    .catch(err => {
      res.status(500)
      .json({ meassage: "Cannot find the client with that id" })
    })
})

module.exports = router;