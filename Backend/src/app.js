//dependencias
const express= require('express');
const cookieParser=require('cookie-parser');
const bodyParser = require('body-parser');

const usersRoutes=require('./routes/users');

const app=express();

//configuracion del servidor app
app.name = "API";
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });
app.use(express.json())

app.use('/', usersRoutes );


module.exports=app;