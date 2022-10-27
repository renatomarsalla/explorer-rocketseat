const { connectionKnex } = require('../database/knex/index');


class DishesAdminRepository {
  // async checkIfIsAdmin(admin) {
  //   const isAdmin = await connectionKnex("users").where({ admin });
  //   return isAdmin;
  // }

  async searchByName(name) {
    const dishesName = await connectionKnex("dishes").where({ name });
    return dishesName;
  }

  async searchById(id) {
    const dishesId = await connectionKnex("dishes").where({ id });
    return dishesId;
  }

  async createDishes({ name, description, price, image }) {
    const dishesId = await connectionKnex("dishes").insert({
      name,
      description,
      price,
      image,


    });

    return ({ id: dishesId });

  }

  async updateDishes({ name, description, price, image, id }) {
    const updatedDishesId = await connectionKnex("dishes").where({ id }).update({
      name,
      description,
      price,
      image,
      id,

    });

    return ({ id: updatedDishesId });

  }

  async deleteDish(id) {
    const deleteDish = await connectionKnex("dishes").where({ id }).delete({ id });
    return deleteDish;
  }
}

module.exports = { DishesAdminRepository }