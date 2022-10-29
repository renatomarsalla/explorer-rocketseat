
class DishesService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository;
  }

  async executeShow(id) {
    const dishesShow = await this.dishesRepository.showDishes(id);

    return dishesShow;
  }

  async executeIndex(name, ingredients) {
    const dishesIndex = await this.dishesRepository.indexDishes(name, ingredients);

    return dishesIndex;
  }

}

module.exports = { DishesService };