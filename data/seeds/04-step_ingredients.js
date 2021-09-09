
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {id: 1, ingredient_id: 1, step_id: 1, quantity: '1 ounce'},
        {id: 2, ingredient_id: 3, step_id: 2, quantity: '1 cup'},
        {id: 3, ingredient_id: 1, step_id: 3, quantity: '1 table spoon'},
        {id: 4, ingredient_id: 2, step_id: 4, quantity: '1 truck load'},
        {id: 5, ingredient_id: 2, step_id: 5, quantity: '1 elephants worth'},
        {id: 6, ingredient_id: 3, step_id: 6, quantity: '1 kitchen'}
      ]);
    });
};
