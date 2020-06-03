const db = require('../../data/dbconfig');

module.exports = {
  getMatExercises,
  getMatExerById,
  updateMatExer,
  removeMatExer
};

function getMatExercises() {
  return db('mat-exers');
};

function getMatExerById(id) {
  return db('mat-exers/:id');
};

function updateMatExer() {

};

function removeMatExer() {

};