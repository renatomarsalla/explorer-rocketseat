const { connection } = require("../database/knex/index");
const { AppError } = require("../utils/AppError");
const { compare } = require("bcrypt");
const { auth } = require("../configs/auth.js");
const { sign } = require("jsonwebtoken");

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await connection("users").where({ email }).first();
    if (!user) {
      throw new AppError("email e/ou senha incorreta", 401);
    }

    const passwordMatched = await compare(password, user.password);
    if (!passwordMatched) {
      throw new AppError("email e/ou senha incorreta", 401);
    }

    const { secret, expiresIn } = auth.jwt;
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    });

    return response.json({ user, token });
  }
}

module.exports = { SessionsController };