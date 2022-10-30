const { IngredientsRepository } = require('../repositories/IngredientsRepository');
const { IngredientsService } = require('../services/IngredientsService');


class IngredientsController {
  async indexIngredients(request, response) {
    const { dish_id } = request.params;


    const ingredientsRepository = new IngredientsRepository();
    const ingredientsService = new IngredientsService(ingredientsRepository);

    await ingredientsService.executeIndex(dish_id);

    return response.json(dish_id);
  }

}

module.exports = { IngredientsController };