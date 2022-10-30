const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    productDescription:{
        type:String
    },
    productPrice:{
        type:Number,
        required:true,
    },
    productQuantity:{
        type:Number,
        required:true,
    },
    productImage:{
        type: String,
        required:true,
    },
    username:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

const product = mongoose.model('Product',Schema)
module.exports = product

