const { Router } = require('express');

const { usersRoutes } = require("./user.routes");
const { dishesRoutes } = require("./dishesAdmin.routes");

const { dishesUserRoutes } = require("./dishesUser.routes");

const { ingredientsRoutes } = require('./ingredients.routes');

const { sessionsRoutes } = require('./sessions.routes');

const { drinksRoutes } = require('./drinksAdmin.routes');

const { drinksUserRoutes } = require('./drinksUser.routes');

const { dessertsRoutes } = require('./dessertsAdmin.routes');

const { dessertsUserRoutes } = require('./dessertsUser.routes');

const { searchDishesUserRoutes } = require('./searchDishesUser.routes');



const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/dishes", dishesRoutes);
routes.use("/dishesUser", dishesUserRoutes);
// routes.use("/dishesUser", dishesUserRoutes);
// routes.use("/files", imagesDishRoutes);
routes.use("/ingredientsDish", ingredientsRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/drinks', drinksRoutes);
routes.use('/drinksUser', drinksUserRoutes);
routes.use('/desserts', dessertsRoutes);
routes.use('/dessertsUser', dessertsUserRoutes);
routes.use('/searchDish', searchDishesUserRoutes);


module.exports = { routes };


