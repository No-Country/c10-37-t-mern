//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const app=require('./src/app');
require('dotenv').config();
const {connect}=require('./src/db');

const port=process.env.PORT||3001;
connect(process.env.MONGODB_URI)
    .then(()=>console.log('connected'))
    .catch((err)=>console.log(err)
    )

app.listen(port, ()=>console.log('servidor escuchando en ',port))















//dependencias
// const express= require('express');
// const cookieParser=require('cookie-parser');
// const bodyParser = require('body-parser');
// const mongoose=require('mongoose');
// const cors=require('cors');

// var corsOptions = {
//     origin: "*",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     preflightContinue: false,
//     optionsSuccessStatus: 204,
//   };


//conexion
// require('dotenv').config();

//servidor
// const usersRoutes=require('./src/routes/users')
// const port=process.env.PORT||3001;

// const app=express();
// app.use((req, res, next) => {
//     // res.header("Access-Control-Allow-Origin", "http://localhost:3001");
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//     next();
//   });

// app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// app.name = "API";
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(cookieParser());
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//     next();
//   });


// //midlewares
// app.use('/', usersRoutes );
// app.use(express.json())
// app.use((err, req, res, next) => {
//     // eslint-disable-line no-unused-vars
//     const status = err.status || 500;
//     const message = err.message || err;
//     console.error(err);
//     res.status(status).send(message);
//   });

// //mongoose connection
// mongoose.connect(process.env.MONGODB_URI)
//     .then(()=>console.log('connected'))
//     .catch((err)=>console.log(err)
//     )


