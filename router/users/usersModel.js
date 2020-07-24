const db = require('../../database/dbconfig');

module.exports = {
  getUsers,
  getById,
  updateUser,
  addUser,
  removeUser
}

function getUsers() {
  return db("users")
}

function getById(id) {
  return db("users")
    .where({ "users.id": id })
    .first()
    .select(
      'users.name'
    )
}

async function addUser(user) {
  const [id] = await db('users').insert(user, 'id')
  return db('users')
    .where({ id })
    .first()
}

function updateUser(id, changes) {
return db('users')
  .where({ id })
  .update(changes)
}

function removeUser(id) {
  return db('users')
    .where ({ id })
    .del()
  }