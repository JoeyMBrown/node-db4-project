const e = require('express');
const Recipes = require('./recipe-model');

const checkRecipeId = (req, res, next) => {
    const { id } = req.params

        Recipes.getRecipeById(id)
            .then((recipe) => {
                if(recipe) {
                    req.recipe = recipe;
                    next()
                } else {
                    next({message: 'Recipe with given ID not found', status: 404})
                }
            })
            .catch(next)
}

module.exports = {
    checkRecipeId
}