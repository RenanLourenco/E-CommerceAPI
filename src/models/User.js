const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    }
})

const user = mongoose.model('User',Schema)

module.exports = user