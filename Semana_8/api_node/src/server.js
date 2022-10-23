require("express-async-errors");
const express = require("express");
const { sqliteConnection } = require("./database/sqlite/index");
const { AppError } = require("./utils/AppError");
const { routes } = require("./routes/index");

const app = express();
app.use(express.json());

const PORT = 3333;

app.use(routes);

sqliteConnection();

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      "status": "error",
      "message": error.message
    })
  }

  console.error(error);

  return response.status(500).json({
    "status": "error",
    "message": "internal server error"
  })
});












app.listen(PORT, () => console.log(`Listening the port ${PORT}`));