const { connectionKnex } = require('../database/knex/index');

class DishesRepository {
  async showDishes(id) {
    const dishes = await connectionKnex('dishes').where({ id }).first();
    // console.log(dishes);

    const ingredients = await connectionKnex('ingredients').where({ dish_id: id }).orderBy("ingredients");

    const dishWithIngredients = { ...dishes, ingredients };
    console.log(dishWithIngredients);

    // return ({ ...dishes, ingredients });
    // console.log('oi');
    return (dishWithIngredients);
  }

  async indexDishes() {

    const dishes = await connectionKnex('dishes').orderBy('name');

    console.log(dishes);

    return dishes;


  }


  ////////////////////////////////////////////////////
  /*async indexDishes(name, ingredients) {

    let dishes;

    if (ingredients) {


      dishes = await connectionKnex('ingredients')
        .select(["dishes.id", "dishes.name"])
        .whereLike("ingredients", `%${ingredients}%`)
        .innerJoin("dishes", "dishes.id", "ingredients.dish_id")
        .orderBy("dishes.name");


    } else {
      dishes = await connectionKnex('dishes')
        .whereLike("name", `%${name}%`)
        .orderBy("name");

    }


    const dishesIngredients = await connectionKnex("ingredients")
    const dishesWithIngredients = dishes.map(dish => {
      const dishIngredient = dishesIngredients.filter(ingredient => ingredient.dish_id === dish.id);

      const dishWithAllInfos = {
        ...dish,
        ingredients: dishIngredient
      }


      console.log(dishesIngredients);
      return ({ dishWithAllInfos });
    })


  }*/


}

module.exports = { DishesRepository };