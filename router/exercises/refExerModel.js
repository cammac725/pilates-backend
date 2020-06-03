const db = require('../../data/dbconfig');

module.exports = {
  getRefExercises,
  getRefExerById,
  updateRefExer,
  removeRevExer
};

function getRefExercises() {
  return db('reformer-exers');
};

function getRefExerById(id) {
  return db('reformer-exers/:id');
};

function updateRefExer() {

};

function removeRevExer() {

};