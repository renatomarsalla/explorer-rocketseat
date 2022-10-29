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

      dishes = await connectionKnex('ingredients')
        .select(["dishes.id", "dishes.name"])
        .whereLike("ingredients", `%${ingredients}%`)
        .innerJoin("dishes", "dishes.id", "ingredients.dish_id")
        .orderBy("dishes.name");
      // console.log(dishes);
      // return ({ dishes });

    } else {
      dishes = await connectionKnex('dishes')
        .whereLike("name", `%${name}%`)
        .orderBy("name");
      // console.log(dishes);
      // return ({ dishes });
    }

    const dishesIngredients = await connectionKnex("ingredients")
    const dishesWithIngredients = dishes.map(dish => {
      const dishIngredient = dishesIngredients.filter(ingredient => ingredient.dish_id === dish.id);

      const dishWithAllInfos = {
        ...dish,
        ingredients: dishIngredient
      }

      console.log(dishWithAllInfos);
      return ({ dishWithAllInfos });
    })

  }


}

module.exports = { DishesRepository };