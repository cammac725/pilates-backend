
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients')
        .insert([
          {
            first_name: 'Cam',
            last_name: 'MacD',
            email: 'cam@cam.com',
            DOB: "Dec 15, 1960",
            occupation: "software developer",
          },
          {
            first_name: 'Lexie',
            last_name: 'Kauffman',
            email: 'lex@lex.com',
            occupation: "pilates instructor",            
          },
        ]);
    });
};
