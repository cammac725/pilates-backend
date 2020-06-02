
exports.up = function(knex) {
  return knex.schema.createTable('user', table => {
    table.increments();

    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
    table.string('email', 255)
      .notNullable()
      .unique()
    table.string('password', 255).notNullable()
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
