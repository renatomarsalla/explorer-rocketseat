
const { DishesRepository } = require('../repositories/DishesRepository');
const { DishesService } = require('../services/DishesService');

const { connectionKnex } = require('../database/knex/index');


class DishesController {

  async showDishes(request, response) {
    const { id } = request.params;

    const dishesRepository = new DishesRepository();
    const dishesService = new DishesService(dishesRepository);

    await dishesService.executeShow(id);

    return response.json();

  }

  async showDishesImages(request, response) {
    // const { image } = request.params;

    const dishesRepository = new DishesRepository();
    const dishesService = new DishesService(dishesRepository);


    dishesService.listImages(image);
    return response.json();
  }

  async indexDishes(request, response) {


    /*const { name, ingredients } = request.query;

    const dishesRepository = new DishesRepository();
    const dishesService = new DishesService(dishesRepository);

    await dishesService.executeIndex(name, ingredients);

    const dishes = await dishesService.executeIndex(name, ingredients);

    return response.json(dishes);*/



    ////////////////////////////////////////////////
    const dishesRepository = new DishesRepository();
    const dishesService = new DishesService(dishesRepository);

    await dishesService.executeIndex();

    const dishes = await dishesService.executeIndex();

    return response.json(dishes);
    ////////////////////////////////////////////////




  }
}

module.exports = { DishesController }