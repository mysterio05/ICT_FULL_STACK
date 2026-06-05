const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    dept:String,
    mark:Number
});

module.exports=mongoose.model('users',userSchema);