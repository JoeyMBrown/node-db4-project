
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'Olive Oil'},
        {id: 2, ingredient_name: 'Butter'},
        {id: 3, ingredient_name: 'Tomato Sauce'}
      ]);
    });
};
