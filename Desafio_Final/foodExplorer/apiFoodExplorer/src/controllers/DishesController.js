
const { DishesRepository } = require('../repositories/DishesRepository');
const { DishesService } = require('../services/DishesService');

class DishesController {

  async showDishes(request, response) {
    const { id } = request.params;

    const dishesRepository = new DishesRepository();
    const dishesService = new DishesService(dishesRepository);

    await dishesService.executeShow(id);

    return response.json();

  }

  async indexDishes(request, response) {
    const { name, ingredients } = request.query;

    const dishesRepository = new DishesRepository();
    const dishesService = new DishesService(dishesRepository);

    await dishesService.executeIndex(name, ingredients);

    return response.json();
  }
}

module.exports = { DishesController }