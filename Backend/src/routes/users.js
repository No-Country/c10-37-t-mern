const express=require('express');
const {postUser,getUser,getUserById}=require('../controllers/users')
const router=express.Router();
// const userSchema=require('../models/User')

router.post('/',postUser)

router.get('/', getUser)


router.get('/:id',getUserById)

router.put('/:id',(req,res)=>{
    res.send('update by id')
})


module.exports=router