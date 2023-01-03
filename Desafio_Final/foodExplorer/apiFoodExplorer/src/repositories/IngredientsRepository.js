const { connectionKnex } = require('../database/knex/index');

class IngredientsRepository {
  async indexIngredients(dish_id) {
    const id_dish = await connectionKnex('ingredients').where({ dish_id });

    // console.log(id_dish)

    return (id_dish);
  }



  async createIngredient({ ingredients, image }) {
    const dishesId = await connectionKnex("listIngredients").insert({
      image,
      ingredients
    });

    return ({ id: dishesId });
  }

  async updateIngredients({ ingredients, dish_id }) {
    const updatedIngredientId = await connectionKnex("ingredients").where({ dish_id }).update({
      ingredients,
      dish_id
    });
    return ({ id: updatedIngredientId });
  }
}

module.exports = { IngredientsRepository };