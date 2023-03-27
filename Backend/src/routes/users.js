const express=require('express');

const router=express.Router();

router.post('/users',(req,res)=>{
    res.send('post')
})

router.get('/users',(req,res)=>{
    res.send('get')
})

module.exports=router