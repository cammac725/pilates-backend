
exports.up = function(knex) {
  return knex.schema.createTable('reformer-exers', table => {
    table.increments();

    table.string('name', 255)
      .notNullable()
      .unique()
    table.string('level', 10)

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('reformer-exers');
};
