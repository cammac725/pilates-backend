
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('wunda-exers').del()
    .then(function () {
      // Inserts seed entries
      return knex('wunda-exers').insert([
        {
          name: 'Footwork',
          level: 'i',
        },
        {
          name: 'Push Down (washer woman)',
          level: 'i',
        },
        {
          name: 'Pull the Pedal Up',
          level: 'i',
        },
        {
          name: 'Push Ups',
          level: 'i',
        },
        {
          name: 'Kneeling Mermaid',
          level: 'i',
        },
        {
          name: 'Swan',
          level: 'i',
        },
        {
          name: 'Reverse Swan - Teaser',
          level: 'i',
        },
        {
          name: 'Twist Series',
          level: 'i',
        },
        {
          name: 'Soleus Press',
          level: 'i',
        },
        {
          name: 'Table',
          level: 'i',
        },
        {
          name: 'Spine Stretch/Stretch/Teaser',
          level: 'i',
        },
        {
          name: 'Going Up Front Str/Diag',
          level: 'i',
        },
        {
          name: 'Mountain Climber Prep',
          level: 'i',
        },
        {
          name: 'Going Up Side',
          level: 'i',
        },
      ]);
    });
};
