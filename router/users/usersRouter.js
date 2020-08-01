const router = require("express").Router();

const Clients = require('./usersModel');

router.get('/', (req, res) => {
  Clients.getClients()
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
  Clients.getClientById(req.params.id)
    .then(client => {
      res.json(client)
    })
    .catch(err => {
      res.status(500)
      .json({ message: "Cannot find the client with that id" })
    })
})

router.put('/:id', (req, res) => {
  Clients.update(req.params.id, changes)
    .then(updatedClient => {
      res.json({ updatedClient })
    })
    .catch(err => {
      res.status(500)
      .json({ message: "Cannot update the client with that id" })
    })
})

router.delete('/:id', async (req, res) => {
  try {
    const deletedClient = await Clients.removeClient(req.params.id);
    res.status(200).json(deletedClient)
  } catch (err) {
    res.status(500)
      .json({ message: 'Cannot delete that client' })
  }
})

module.exports = router;