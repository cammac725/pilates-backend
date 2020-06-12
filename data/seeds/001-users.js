
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('users')
        .insert([
          {
            first_name: 'Cam',
            last_name: 'MacD',
            email: 'cam@cam.com',
            username: 'cammac725',
            password: 'elrock',
          },
          {
            first_name: 'Lexie',
            last_name: 'Kauffman',
            email: 'lex@lex.com',
            username: 'lex',
            password: 'kauff',
          },
          
        ]);
    });
};
