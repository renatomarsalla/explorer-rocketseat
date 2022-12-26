const { connectionKnex } = require("../database/knex/index.js");


class SessionsRepository {
  async userExists(email, password) {
    const emailExists = connectionKnex('users').where({ email }).first();
    return emailExists;
  }


}

module.exports = { SessionsRepository }