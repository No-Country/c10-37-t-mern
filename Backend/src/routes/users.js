const express=require('express');
const {postUser,getUser,getUserById}=require('../controllers/users')
const router=express.Router();
// const userSchema=require('../models/User')

router.post('/users',postUser)

router.get('/users', getUser)


router.get('/users/:id',getUserById)

router.put('/users/:id',(req,res)=>{
    res.send('update by id')
})


module.exports=router