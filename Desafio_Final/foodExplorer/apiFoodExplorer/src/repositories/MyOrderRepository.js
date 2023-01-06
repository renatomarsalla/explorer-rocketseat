const { connectionKnex } = require('../database/knex/index');

const { DiskStorage } = require('../providers/DiskStorage')


class MyOrderRepository {


  async getUserId(id) {
    const userId = await connectionKnex("users").where({ id });

    return userId;
  }




  async createOrder({ name, quantity, price, total, image, id }) {

    const user = await connectionKnex("users").where({ id });

    const dishesId = await connectionKnex("orders").insert({
      name,
      quantity,
      price,
      total,
      image,
      user_id: user[0].id

    });





    return ({ id: dishesId });


  }


}

module.exports = { MyOrderRepository }