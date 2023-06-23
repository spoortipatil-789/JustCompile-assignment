const  mongoose = require("mongoose");


const newSchema= new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const collection = mongoose.model("employees", newSchema)

module.exports=collection