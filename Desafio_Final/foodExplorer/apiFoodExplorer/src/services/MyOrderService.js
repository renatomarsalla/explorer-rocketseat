const { AppError } = require('../utils/AppError');



class MyOrderService {
  constructor(myOrderRepository) {
    this.myOrderRepository = myOrderRepository;
  }

  async execute({ name, quantity, price, total, image, id }) {
    // const dishesAlreadyRegistered = await this.myOrderRepository.searchByName(name);
    // if (dishesAlreadyRegistered.length !== 0) {
    //   throw new AppError("Dish already is registered");
    // }

    // const user = await this.myOrderRepository.getUserId(id)

    // console.log("oi");;



    const dishCreated = await this.myOrderRepository.createOrder({ name, quantity, price, total, image, id });

    return dishCreated;

  }


}

module.exports = { MyOrderService };