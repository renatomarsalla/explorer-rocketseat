const { connectionKnex } = require('../database/knex/index');

class DishesRepository {
  async showDishes(id) {
    const dishes = await connectionKnex('dishes').where({ id }).first();
    console.log(dishes);
    return ({ dishes });
  }

  async indexDishes(name) {
    // let dishes;

    // if (ingredients) {
    //   const filteredIngredients = ingredients.split(',').map(ingredient => ingredient.trim());

    //   dishes = await connectionKnex('ingredients').whereIn('name', filteredIngredients);
    //   console.log(dishes);
    // } else {
    //   const dishes = await connectionKnex('dishes').where({ user_id }).whereLike("name", `%${name}%`).orderBy("name");
    //   console.log(dishes);
    //   return ({ dishes });
    // }


    const dishes = await connectionKnex('dishes').whereLike("name", `%${name}%`).orderBy("name");
    console.log(dishes);
    return ({ dishes });

  }

}

module.exports = { DishesRepository };