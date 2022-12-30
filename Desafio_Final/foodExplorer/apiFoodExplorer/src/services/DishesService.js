
class DishesService {
  constructor(dishesRepository) {
    this.dishesRepository = dishesRepository;
  }

  async executeShow(id) {
    const dishesShow = await this.dishesRepository.showDishes(id);

    return dishesShow;
  }

  // async executeIndex(name) {
  //   const dishesIndex = await this.dishesRepository.indexDishes(name);

  //   return dishesIndex;
  // }


  async executeIndex() {
    const dishesIndex = await this.dishesRepository.indexDishes();

    return dishesIndex;
  }

}

module.exports = { DishesService };