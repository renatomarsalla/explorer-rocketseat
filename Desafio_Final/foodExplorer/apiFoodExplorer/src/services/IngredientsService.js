class IngredientsService {
  constructor(ingredientsRepository) {
    this.ingredientsRepository = ingredientsRepository;
  }
  async executeIndex(dish_id) {
    const showIngredients = await this.ingredientsRepository.indexIngredients(dish_id);

    return showIngredients;
  }
}

module.exports = { IngredientsService }