const { Router } = require('express');

const { IngredientsController } = require('../controllers/IngredientsController');

const ingredientsRoutes = Router();

const ingredientsController = new IngredientsController();

ingredientsRoutes.get('/:dish_id', ingredientsController.indexIngredients);
ingredientsRoutes.post('/', ingredientsController.createIngredient);

module.exports = { ingredientsRoutes };