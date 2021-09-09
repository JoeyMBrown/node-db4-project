
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments()
        tbl.string('recipe_name', 30).notNullable().unique()
    })
    .createTable('steps', tbl => {
        tbl.increments()
        tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes')
        tbl.string('step_instructions', 128).notNullable()
        tbl.integer('step_number').notNullable()
    })
    .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.string('ingredient_name', 30).notNullable().unique()
    })
    .createTable('step_ingredients', tbl => {
        tbl.increments()
        tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients')
        tbl.integer('step_id').unsigned().notNullable().references('id').inTable('steps')
        tbl.string('quantity', 128).notNullable()
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('step_ingredients')
};
