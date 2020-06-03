
exports.up = function(knex) {
  return knex.schema.createTable('reformer-exers', table => {
    table.increments();

    table.string('name', 255)
      .notNullable()
      .unique();
    table.string('level', 5)
      .notNullable();
    table.boolean('assigned');

    table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('reformer-exers');
};
