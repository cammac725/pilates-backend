
exports.up = function(knex) {
  return knex.schema.createTable('clients', table => {
    table.increments();

    table.string('first_name', 255)
      .notNullable()
    table.string('last_name', 255)
      .notNullable();
    table.string('email', 255)
      .notNullable()
    
    table.date('DOB')
    table.date('date')
    table.text('occupation', 1000)
    table.text('medical', 1000)
    table.text('goals', 1000)
    table.text('assessment', 1000)
    table.text('additional') 
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('clients');
};
