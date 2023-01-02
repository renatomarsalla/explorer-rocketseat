const { connectionKnex } = require('../database/knex/index');

class IngredientsRepository {
  async indexIngredients(dish_id) {
    const id_dish = await connectionKnex('ingredients').where({ dish_id });

    console.log(id_dish)

    return ({ id_dish });
  }

  async createIngredient({ ingredients, image }) {
    const dishesId = await connectionKnex("listIngredients").insert({
      image,
      ingredients
    });

    return ({ id: dishesId });
  }
}

module.exports = { IngredientsRepository };