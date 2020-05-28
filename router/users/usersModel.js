const db = require('../../database/dbconfig');

module.exports = {
  getUsers,
  getById,
  update,
  remove
}

function getUsers() {
  return db("users")
}

function getById(id) {
  return db("users/:id")
}

function update() {

}

function remove() {
  
}