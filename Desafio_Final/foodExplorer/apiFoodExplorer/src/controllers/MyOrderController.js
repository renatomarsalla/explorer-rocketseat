const { MyOrderRepository } = require('../repositories/MyOrderRepository');
const { MyOrderService } = require('../services/MyOrderService');

const { connectionKnex } = require('../database/knex/index');


class MyOrderController {
  async createOrder(request, response) {
    const { name, quantity, price, total, image, } = request.body;

    const { id } = request.params

    const myOrderRepository = new MyOrderRepository();
    const myOrderService = new MyOrderService(myOrderRepository);

    myOrderService.execute({ name, quantity, price, total, image, id })

    // const user = await connectionKnex("users").where({ id });

    // console.log("id ", id);
    // console.log("user ", user[0].id);

    // const dishesId = await connectionKnex("orders").insert({
    //   name,
    //   quantity,
    //   price,
    //   total,
    //   image,
    //   user_id: user[0].id

    // });





    return response.json({ id });


    // const myOrderRepository = new MyOrderRepository();
    // const myOrderService = new MyOrderService(myOrderRepository);

    // myOrderService.execute({ name, quantity, price, total, image, user_id })

    // return response.status(201).json();
  }




}

module.exports = { MyOrderController };