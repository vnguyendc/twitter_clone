const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('User', Schema)