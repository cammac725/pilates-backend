const router = require("express").Router();

const Users = require('./usersModel');

router.get('/', (req, res) => {
  Users.getUsers()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Cannot retrieve users from database." })
    })
})

router.get('/:id' (req, res) => {
  Users.getById(req.params.id)
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.status(500)
      .json({ meassage: "Cannot find the user with that id" })
    })
})

module.exports = router;