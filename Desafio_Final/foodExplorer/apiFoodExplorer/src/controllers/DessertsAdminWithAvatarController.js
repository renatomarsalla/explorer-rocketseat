const { json } = require('express');
const { DessertWithAvatarAdminRepository } = require('../repositories/DessertAdminWithAvatarRepository');
const { DessertWithAvatarAdminService } = require('../services/DessertsAdminWithAvatarService');



// const { connectionKnex } = require('../database/knex/index');

// const { AppError } = require('../utils/AppError');

class DessertsWithAvatarAdminController {
  async createDesserts(request, response) {
    // Parâmetros enviados pelo body
    const { name, description, price, ingredients } = request.body;

    const dishFilename = request.file.filename;

    const dessertWithAvatarAdminRepository = new DessertWithAvatarAdminRepository();
    const dessertWithAvatarAdminService = new DessertWithAvatarAdminService(dessertWithAvatarAdminRepository);

    dessertWithAvatarAdminService.execute({ name, description, price, ingredients, dishFilename })

    return response.status(201).json();
  }

  // async createDishes(request, response) {
  //   // Parâmetros enviados pelo body
  //   const { name, description, price, ingredients } = request.body;



  //   // Conferência se o prato já existe no banco de dados
  //   const checkDishAlreadyExistInDatabase = await connectionKnex("dishes").where({ name }).first();

  //   if (checkDishAlreadyExistInDatabase) {
  //     throw new AppError("Este prato já existe em nossa database")
  //   }

  //   // TESTE
  //   // Pegando o nome do arquivo
  //   const dishFilename = request.file.filename;
  //   // Instanciando o diskstorage
  //   const diskStorage = new DiskStorage()
  //   // Caso ainda não exista
  //   const filename = await diskStorage.saveFile(dishFilename);

  //   // Inserindo o prato e todos os seus dados
  //   const dish_id = await connectionKnex("dishes").insert({
  //     image: filename,
  //     name,
  //     description,
  //     price
  //   });


  //   // Inserindo os ingredients passado no dish na tabela de ingredients
  //   const ingredientsInsert = ingredients.map(ingredient => {
  //     return {
  //       ingredients: ingredient,
  //       dish_id
  //     }
  //   });

  //   await connectionKnex("ingredients").insert(ingredientsInsert)

  //   return response.status(201).json({ name })

  // }


}

module.exports = { DessertsWithAvatarAdminController };