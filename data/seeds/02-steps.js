
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe_id: 1, step_instructions: "preheat the oven", step_number: 1},
        {id: 2, recipe_id: 1, step_instructions: "throw bananas at the wall", step_number: 2},
        {id: 3, recipe_id: 1, step_instructions: "drop kick a panda", step_number: 3},
        {id: 4, recipe_id: 2, step_instructions: "test step 1 for recipe 2", step_number: 1},
        {id: 5, recipe_id: 2, step_instructions: "test step 2 for recipe 2", step_number: 2},
        {id: 6, recipe_id: 3, step_instructions: "test step 1 for recipe 3", step_number: 1}
      ]);
    });
};
