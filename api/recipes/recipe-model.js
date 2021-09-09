const db = require('../../data/db-config');

async function getRecipeById(recipe_id) {
    const recipeArray = await db('step_ingredients as si')
        .leftJoin('steps as st', 'si.step_id', 'st.id')
        .leftJoin('ingredients as ig', 'si.ingredient_id', 'ig.id')
        .leftJoin('recipes as re', 're.id', 'st.recipe_id')
        .select('ig.ingredient_name', 're.recipe_name', 'si.quantity', 'st.step_number', 're.id as recipe_id', 'st.id as step_id', 'st.step_instructions', 'si.ingredient_id')
        .where('re.id', recipe_id)

    const recipe = {
        recipe_id: recipeArray[0].recipe_id,
        recipe_name: recipeArray[0].recipe_name,
        created_at: Date.now(),
        steps: recipeArray.map((step) => {
            return { step_id: step.step_id, step_number: step.step_number, step_instructions: step.step_instructions, ingredients: [] }
        })
    }

        return recipe;
}

// SELECT
//     ig.ingredient_name,
//     re.recipe_name,
//     si.quantity,
//     st.step_number,
//     re.id as recipe_id,
//     st.id as step_id,
//     st.step_instructions,
//     si.ingredient_id
// FROM step_ingredients as si
// INNER JOIN steps as st
// on si.step_id = st.id
// INNER JOIN ingredients as ig
// on si.ingredient_id = ig.id
// INNER JOIN recipes as re
// on re.id = st.recipe_id
// WHERE re.id = 1

module.exports = {
    getRecipeById
}