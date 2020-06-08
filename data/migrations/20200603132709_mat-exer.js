
exports.up = function(knex) {
  return knex.schema.createTable('mat-exers', table => {
    table.increments();

    table.string('name', 255)
      .notNullable()
      .unique();
    table.string('level', 10)
      .notNullable();

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('mat-exers');
};
