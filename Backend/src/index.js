const express= require('express');
const mongoose=require('mongoose');
require('dotenv').config();

const usersRoutes=require('./routes/users')
const app=express();
const port=process.env.PORT||3001;

//midlewares
app.use('/', usersRoutes );

//mongoose connection
mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log('connected'))
    .catch((err)=>console.log(err)
    )


app.listen(port, ()=>console.log('servidor escuchando en ',port))