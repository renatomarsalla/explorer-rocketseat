const { connectionKnex } = require('../database/knex/index');

class DishesRepository {
  async showDishes(id) {
    const dishes = await connectionKnex('dishes').where({ id }).first();
    // console.log(dishes);

    const ingredients = await connectionKnex('ingredients').where({ dish_id: id }).orderBy("ingredients");

    const dishWithIngredients = { ...dishes, ingredients };
    console.log(dishWithIngredients);

    // return ({ ...dishes, ingredients });
    return (dishWithIngredients);
  }

  async indexDishes(name, ingredients) {

    let dishes;

    if (ingredients) {
      // const filteredIngredients = ingredients.split(',').map(ingredient => ingredient.trim());

      dishes = await connectionKnex('ingredients').
        select(["dishes.id", "dishes.name"]).whereLike("ingredients", `%${ingredients}%`).innerJoin("dishes", "dishes.id", "ingredients.dish_id").orderBy("dishes.name");
      console.log(dishes);
      return ({ dishes });

    } else {
      dishes = await connectionKnex('dishes').whereLike("name", `%${name}%`).orderBy("name");
      console.log(dishes);
      return ({ dishes });
    }

    // const dishes = await connectionKnex('dishes').whereLike("name", `%${name}%`).orderBy("name");
    // console.log(dishes);
    // return ({ dishes });


  }

}

module.exports = { DishesRepository };