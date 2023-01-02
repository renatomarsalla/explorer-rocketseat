class IngredientsService {
  constructor(ingredientsRepository) {
    this.ingredientsRepository = ingredientsRepository;
  }
  async executeIndex(dish_id) {
    const showIngredients = await this.ingredientsRepository.indexIngredients(dish_id);

    return showIngredients;
  }

  async execute({ ingredients, image }) {
    const ingredient = await this.ingredientsRepository.createIngredient({ ingredients, image });

    return ingredient;

  }
}

module.exports = { IngredientsService }