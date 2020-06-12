
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cadillac-exers').del()
    .then(function () {
      // Inserts seed entries
      return knex('cadillac-exers').insert([
        {
          name: 'Roll Back Bar',
          level: 'b',
        },
        {
          name: 'Breathing',
          level: 'b',
        },
        {
          name: 'Thigh Stretch',
          level: 'i',
        },
        {
          name: 'Chest Expansion',
          level: 'i',
        },
        {
          name: 'Arm Springs',
          level: 'i',
        },
        {
          name: 'Leg Springs',
          level: 'i',
        },
        {
          name: 'Flying Eagle',
          level: 'i',
        },
        {
          name: 'Spread Eagle',
          level: 'i',
        },
        {
          name: 'Hanging Pull Ups',
          level: 'i',
        },
        {
          name: 'Standing Arm Springs',
          level: 'i',
        },
        {
          name: 'Rev Chest Expansion',
          level: 'i',
        },
        {
          name: 'Push Through Bar',
          level: 'i',
        },
        {
          name: 'Reverse Push Through',
          level: 'i',
        },
        {
          name: 'Monkey',
          level: 'i',
        },
        {
          name: 'Tower',
          level: 'i',
        },
        {
          name: 'Reverse Corkscrew',
          level: 'a',
        },
        {
          name: 'Teaser Series',
          level: 'a',
        },
        {
          name: 'Spread Eagle - Trad. Ending',
          level: 'i',
        },
        {
          name: 'Pull Ups - Trad. Ending',
          level: 'i',
        },
        {
          name: 'Hanging Pull Ups - Trad. Ending',
          level: 'i',
        },
        {
          name: 'Hanging Half/Full - Trad. Ending',
          level: 'i',
        },
        
      ]);
    });
};
