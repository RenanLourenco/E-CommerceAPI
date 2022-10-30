const {Router, application} = require('express')
const UserController = require('../controllers/UserController/userController')
const LoginController = require('../controllers/LoginController/loginController')
const ProductController = require('../controllers/ProductController/productController')
const CartController = require('../controllers/CartController/cartController')

const authentication = require('../middlewares/authenticate')

const routes = Router();

routes.get('/',(req,res)=>{
    res.send('hello world')
})

//routes for users
routes.post('/users',UserController.createUser) // post new user
routes.get('/users',UserController.getUsers) // list all users
routes.get('/users/:user_id',UserController.getUser) // list particular user
routes.post('/login',LoginController.createSession) // login
// ------------------------------------
//routes for products
routes.post('/products/:user_id',ProductController.createProduct) // post new product with user_id (track product)
routes.get('/products/:product_id',ProductController.getProduct)// list particular product 
routes.get('/:user_id/products',ProductController.getUserProduct) // list particular product created by user
routes.patch('/products/:user_id/:product_id',ProductController.updateProduct) // update particular product created by user
routes.delete('/products/:user_id/:product_id',ProductController.deleteProduct) // delete particular product created by user
routes.get('/products',ProductController.getProducts)// list all products
//----------------------------
//routes for cart

routes.post('/cart/:user_id',CartController.createCart) // post new cart
routes.get('/cart/:cart_id',CartController.getCart) // list particular cart
routes.get('/cart/:user_id/:cart_id',CartController.getUserCarts)   // list particular cart from the user

module.exports = routes