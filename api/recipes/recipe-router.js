const express = require('express');
const { checkRecipeId } = require('./recipe-middleware');
const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/:id', checkRecipeId, (req, res, next) => {
        res.status(200).json(req.recipe)
  })

  router.use((err, req, res, next) => { 
    res.status(err.status || 500).json({
      message: err.message
    })
  })

  module.exports = router