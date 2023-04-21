const express = require("express");
require("dotenv").config();
const cors = require("cors");
const petRouter = require("./src/routes/pet.routes.js");
const userRouter = require("./src/routes/users.js");
const cookieParser = require("cookie-parser");
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
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.urlencoded({ extended: true }));
    app.use(cors({ origin: "*", credentials: true }));

    //endpoints
    app.use("/api/pet", petRouter);
    app.use("/users", userRouter);
  } catch (error) {
    console.error(error);
  }
}
// test
bootstrap();
