
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          name: 'Hundred',
          level: 'b',
        },
        {
          name: 'Roll Up',
          level: 'b',
        },
        {
          name: 'Rollover',
          level: 'a',
        },
        {
          name: 'Leg Circles',
          level: 'b',
        },
        {
          name: 'Rolling Like A Ball',
          level: 'b',
        },
        {
          name: 'Single Leg Stretch',
          level: 'b',
        },
        {
          name: 'Double Leg Stretch',
          level: 'b',
        },
        {
          name: 'Scissors',
          level: 'b',
        },
        {
          name: 'Lower Lift',
          level: 'i',
        },
        {
          name: 'Criss Cross',
          level: 'i',
        },
        {
          name: 'Spine Stretch Forward',
          level: 'b',
        },
        {
          name: 'Open Leg Rocker',
          level: 'i',
        },
        {
          name: 'Corkscrew',
          level: 'b',
        },
        {
          name: 'Saw',
          level: 'b',
        },
        {
          name: 'Swan Prep',
          level: 'b',
        },
        {
          name: 'Swan/Neck Roll',
          level: 'i',
        },
        {
          name: 'Swan Dive',
          level: 'a',
        },
        {
          name: 'Single Leg Kicks',
          level: 'b',
        },
        {
          name: 'Double Leg Kicks',
          level: 'i',
        },
        {
          name: 'Neck Pull',
          level: 'i',
        },
        {
          name: 'Shoulder Bridge',
          level: 'a',
        },
        {
          name: 'Scissors (lifted)',
          level: 'a',
        },
        {
          name: 'Bicycle (lifted)',
          level: 'a',
        },
        {
          name: 'Spine Twist',
          level: 'a',
        },
        {
          name: 'Jack Knife',
          level: 'i',
        },
        {
          name: 'Sidekicks',
          level: 'b',
        },
        {
          name: 'Teaser',
          level: 'b, i, a',
        },
        {
          name: 'Can Can/Hip Circles',
          level: 'a',
        },
        {
          name: 'Swiming',
          level: 'i',
        },
        {
          name: 'Leg Pull Down',
          level: 'a',
        },
        {
          name: 'Leg Pull Up',
          level: 'a',
        },
        {
          name: 'Kneeling Side Kicks',
          level: 'a',
        },
        {
          name: 'Mermaid',
          level: 'a',
        },
        {
          name: 'Boomerang',
          level: 'a',
        },
        {
          name: 'Seal',
          level: 'b',
        },
        {
          name: 'Crab/Rocking',
          level: 'a',
        },
        {
          name: 'Control Balance',
          level: 'a',
        },
        {
          name: 'Push Ups',
          level: 'i',
        },
        
      ]);
    });
};
