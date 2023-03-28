const express=require('express');
const {postUser}=require('../controllers/users')
const router=express.Router();
// const userSchema=require('../models/User')

router.post('/users',postUser)

router.get('/users',(req,res)=>{
    res.send('read')
})

router.get('/users/:id',(req,res)=>{
    res.send('read by id')
})

router.put('/users/:id',(req,res)=>{
    res.send('update by id')
})

router.get('/users/:id',(req,res)=>{
    res.send('delete by id')
})

module.exports=router