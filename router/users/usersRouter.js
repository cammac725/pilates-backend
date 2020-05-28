const router = require(express).Router();

const Users = require('./usersModel');

router.get('/all', (req, res) => {
  Router.getUsers()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res
        .status(500)
        .json({ err: "Cannot retrieve users from database." })
    })
})