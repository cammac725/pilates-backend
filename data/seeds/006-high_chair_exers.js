
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('high-chair-exers').del()
    .then(function () {
      // Inserts seed entries
      return knex('high-chair-exers').insert([
        {
          name: 'Pumping on Toes - para/1 leg',
          level: 'b',
        },
        {
          name: 'Going Up Front',
          level: 'b',
        },
        {
          name: 'Going Up Side',
          level: 'i',
        },
        {
          name: 'Press Ups - Front',
          level: 'i',
        },
        {
          name: 'Press Ups - Back',
          level: 'i',
        },
        {
          name: 'Press Down - Front',
          level: 'i',
        },
        {
          name: 'Press Down - Side',
          level: 'i',
        },
        {
          name: 'Press Down - Crossover',
          level: '',
        },
      ]);
    });
};
