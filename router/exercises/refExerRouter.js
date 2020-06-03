const router = require('express').Router();

const RefExercises = require('./refExerModel');

router.get('/all', (req, res) => {
  RefExercises.getRefExercises()
    .then(exercises => {
      res.status(200).json(exercises);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Cannot retrieve exercises from the database."});
    });
});

module.exports = router;