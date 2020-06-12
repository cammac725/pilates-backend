
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('small-barrel-exers').del()
    .then(function () {
      // Inserts seed entries
      return knex('small-barrel-exers').insert([
        {
          name: 'Leg Series - 2 legged',
          level: 'i',
        },
        {
          name: 'Leg Series - 1 legged',
          level: 'i',
        },
        {
          name: 'Stretch with Bar',
          level: 'i',
        },
        {
          name: 'Swan',
          level: 'a',
        },
        {
          name: 'Teaser Series',
          level: 'a',
        },
        {
          name: 'Ladder Barrel - Back Stretch',
          level: 'i',
        },
        {
          name: 'Ladder Barrel - Short Box Series',
          level: 'i',
        },
        {
          name: 'Ladder Barrel - Horseback Prep',
          level: 'i',
        },
        {
          name: 'Ladder Barrel - Ballet Stretches',
          level: 'i',
        },
        {
          name: 'Magic Circle - Legs/Supine',
          level: 'i',
        },
        {
          name: 'Magic Circle - Legs/Standing',
          level: 'i',
        },
        {
          name: 'Magic Circle - Arms',
          level: 'i',
        },
        {
          name: 'Pedi Pull - Chest Expansion',
          level: 'a',
        },
        {
          name: 'Pedi Pull - Arm Circles',
          level: 'a',
        },
        {
          name: 'Pedi Pull - Knee Bends',
          level: 'a',
        },
      ]);
    });
};
