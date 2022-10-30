const cart = require('../../models/Cart')
const Cart = require('../../models/Cart')
const ProductController = require('../ProductController/productController')

const CartController = {

    async createCart(req,res){

        const body = req.body
        const {user_id} = req.params

        try {
           
            const createdCart = await Cart.create({...body, username: user_id})
            return res.status(200).send(createdCart)
        } catch (error) {
            return res.status(400).send(error)
        }


    },

    async getUserCarts(req,res){
        const body = req.body
        const cart_id = req.params.cart_id
        console.log(cart_id)
        try {
            
            const cartFromUser = await Cart.findById({"_id":cart_id})
            
            .populate('products')
            .populate('username')
            return res.status(200).send(cartFromUser)
        } catch (error) {
            return res.status(400).send(error)
        }
    },

    async getCart(req,res){
        const cart_id = req.params.cart_id
        try {
            const cartFromUser = await Cart.findById(cart_id)
            .populate('products')
            .populate('username')
            return res.status(200).send(cartFromUser)
        } catch (error) {
            return res.status(400).send(error)
        }
    },


}

module.exports = CartController