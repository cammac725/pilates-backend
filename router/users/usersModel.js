const db = require('../../data/dbconfig');

module.exports = {
  getUsers,
  getById,
  updateUser,
  addUser,
  removeUser
}

function getUsers() {
  return db("clients")
}

function getById(id) {
  return db("clients")
    .where({ "clients.id": id })
    .first()
    .select(
      'clients.first_name'
    )
}

async function addUser(user) {
  const [id] = await db('clients').insert(user, 'id')
  return db('clients')
    .where({ id })
    .first()
}

function updateUser(id, changes) {
return db('clients')
  .where({ id })
  .update(changes)
}

function removeUser(id) {
  return db('clients')
    .where ({ id })
    .del()
  }