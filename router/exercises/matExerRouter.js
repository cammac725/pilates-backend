const router = require('express').Router();

const MatExercises = require('./matExerModel');

router.get('/all', (req, res) => {
  MatExercises.getMatExercises()
    .then(exercises => {
      res.status(200).json(exercises)
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Cannot retrieve exercises from the database." });
    });
});

module.exports = router;