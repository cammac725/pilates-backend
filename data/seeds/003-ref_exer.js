
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          name: 'Footwork',
          level: 'b',
        },
        {
          name: 'Hundred',
          level: 'b',
        },
        {
          name: 'Short Spine/Overhead',
          level: 'i',
        },
        {
          name: 'Coordination',
          level: 'i',
        },
        {
          name: 'Rowing',
          level: 'a',
        },
        {
          name: 'Swan on Ladder Board',
          level: 'i',
        },
        {
          name: 'Hamstring Curls',
          level: 'a',
        },
        {
          name: 'Pull Straps',
          level: 'i',
        },
        {
          name: 'Back Stroke',
          level: 'i',
        },
        {
          name: 'Teaser',
          level: 'i',
        },
        {
          name: 'Breast Stroke',
          level: 'a',
        },
        {
          name: 'Horseback',
          level: 'a',
        },
        {
          name: 'Short Box',
          level: 'b',
        },
        {
          name: 'Long Stretch',
          level: 'i',
        },
        {
          name: 'Down Stretch',
          level: 'i',
        },
        {
          name: 'Up Stretch',
          level: 'i',
        },
        {
          name: 'Elephant/Arabesque',
          level: 'b',
        },
        {
          name: 'Long Back Stretch',
          level: 'a',
        },
        {
          name: 'Stomach Massage',
          level: 'b',
        },
        {
          name: 'Tendon Stretch',
          level: 'a',
        },
        {
          name: 'Overhead/Short Spine',
          level: 'a',
        },
        {
          name: 'Semi Circle',
          level: 'i',
        },
        {
          name: 'Chest Expansion',
          level: 'a',
        },
        {
          name: 'Thigh Stretch',
          level: 'a',
        },
        {
          name: 'Arm Circles',
          level: 'a',
        },
        {
          name: 'Mermaid',
          level: 'a',
        },
        {
          name: 'Snake and Twist',
          level: 'a',
        },
        {
          name: 'Tick Tock/Corkscrew',
          level: 'a',
        },
        {
          name: 'Control Balance (ref)',
          level: 'a',
        },
        {
          name: '2nd Long Box',
          level: 'a',
        },
        {
          name: 'Long Spine Massage',
          level: 'a',
        },
        {
          name: 'High Frog Leg Circles',
          level: 'a',
        },
        {
          name: 'Knee Stretches',
          level: 'b',
        },
        {
          name: 'Running',
          level: 'b',
        },
        {
          name: 'Pelvic Lift',
          level: 'b',
        },
        {
          name: 'Splits - Front, Side, Russian',
          level: 'i, a',
        },
        {
          name: 'Balance Control - Front/Back',
          level: 'a',
        },
        {
          name: 'Star Prep/Star',
          level: 'a',
        },
        {
          name: 'Jump Board',
          level: 'a',
        },
      ]);
    });
};
