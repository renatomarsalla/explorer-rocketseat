const { SessionsRepository } = require('../repositories/SessionsRepository.js');

const { SessionsService } = require('../services/SessionsService')




class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const sessionsRepository = new SessionsRepository();

    const sessionsService = new SessionsService(sessionsRepository);

    await sessionsService.execute({ email, password })




    return response.json();
  }
}

module.exports = { SessionsController }