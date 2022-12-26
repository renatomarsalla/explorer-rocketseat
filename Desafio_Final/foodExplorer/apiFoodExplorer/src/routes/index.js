const { Router } = require('express');

const { usersRoutes } = require("./user.routes");
const { dishesRoutes } = require("./dishesAdmin.routes");

const { dishesUserRoutes } = require("./dishesUser.routes");

const { ingredientsRoutes } = require('./ingredients.routes');

const { sessionsRoutes } = require('./sessions.routes');

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/dishes", dishesRoutes);
routes.use("/dishesUser", dishesUserRoutes);
routes.use("/ingredientsDish", ingredientsRoutes);
routes.use('/sessions', sessionsRoutes);


module.exports = { routes };


