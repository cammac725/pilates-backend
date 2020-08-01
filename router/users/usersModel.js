const db = require('../../data/dbconfig');

module.exports = {
  getClients,
  getClientById,
  updateClient,
  addClient,
  removeClient,
}

function getClients() {
  return db("clients")
}

function getClientById(id) {
  return db("clients")
    .where({ "clients.id": id })
    .first();
}

async function addClient(client) {
  const [id] = await db('clients').insert(client, 'id')
  return getClientById(id);
}

function updateClient(id, changes) {
return db('clients')
  .where({ id })
  .update(changes);
}

function removeClient(id) {
  return db('clients')
    .where ({ id })
    .del();
  }