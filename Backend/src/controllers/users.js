const userSchema=require('../models/User')

const postUser = async(req,res)=>{
    // const {name,email,adress}=req.body;
    // console.log(name);
    console.log(req.body);
    try {
      const user=userSchema(req.body);
      await user.save();
      res.status(200).json(user)  
    } catch (error) {
        res.status(404).json({"mensaje":error.message})
    }
}

module.exports={postUser}