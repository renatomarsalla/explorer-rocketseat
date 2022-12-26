const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../configs/upload')

const { DishesAdminController } = require('../controllers/DishesAdminController');

const dishesRoutes = Router();

const upload = multer(uploadConfig.MULTER);

const dishesAdminController = new DishesAdminController();

dishesRoutes.post('/', dishesAdminController.createDishes);
dishesRoutes.put('/:id', dishesAdminController.updateDish);
dishesRoutes.delete('/:id', dishesAdminController.deleteDish);
dishesRoutes.patch('/avatar', upload.single("avatar"), (request, response) => {
  console.log(request.file.filename);
  response.json();
})

module.exports = { dishesRoutes };