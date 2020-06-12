
exports.up = function(knex) {
  return knex.schema.createTable('high-chair-exers', table => {
    table.increments();

    table.string('name', 255)
      .notNullable()
      .unique();
    table.string('level', 10);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('high-chair-exers');
};
