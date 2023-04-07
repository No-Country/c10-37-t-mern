const mongoose=require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    adress:{
        type:String,
        required:true
    },
    photo:{
        type:String,
    },
    phone:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model('User',userSchema);