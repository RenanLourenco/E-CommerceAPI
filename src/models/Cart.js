const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'  
    }],


    username:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },

    address:{
        street:{
            type:String,
            required:true,
        },
        number:{
            type:String,
            required:true,
        },
        city:{
            type:String,
            required:true,
        },

    },
    payment:{
        card:{
            number:{
                type:String,
            },
            cvc:{
                type:String
            }
        },
        
    }
})

const cart = mongoose.model('Cart',Schema)

module.exports = cart