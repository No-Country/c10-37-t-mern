const express = require("express");
require("dotenv").config();
const petRouter = require("./src/routes/pet.routes.js");
const dbConnection = require("./src/db/dbConnection.js");

async function bootstrap() {
  try {
    //backend connection
    const app = express();
    app.set("port", process.env.PORT || 5500);
    const server = app.listen(app.get("port"), () =>
      console.log(`Server on port ${app.get("port")}`)
    );

    //middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //endpoints
    app.use("/api/pet", petRouter);
  } catch (error) {
    console.error(error);
  }
}

bootstrap();
