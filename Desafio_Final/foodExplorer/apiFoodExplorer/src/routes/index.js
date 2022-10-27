const { Router } = require('express');

const { usersRoutes } = require("./user.routes");
const { dishesRoutes } = require("./dishesAdmin.routes");

const { dishesUserRoutes } = require("./dishesUser.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/dishes", dishesRoutes);
routes.use("/dishesUser", dishesUserRoutes);


module.exports = { routes };


