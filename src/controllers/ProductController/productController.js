const Product = require('../../models/Product')

const ProductController = {
    async createProduct(req,res){
        var user = req.params.user_id
        var body = req.body
        let data = {username: user, ...body}
        try {
            const newProduct = await Product.create(data)
            await newProduct.populate('username')
            return res.status(201).send(newProduct)
        } catch (error) {
            return res.status(400).send({message:'Erro ao cadastrar novo produto '+ error.message})
        }
    },
    async getProducts(req,res){

        try {
            Product.find()
            .populate('username')
            .exec((err,Product)=>{
                res.status(200).json(Product)
            })
        } catch (error) {
            return res.status(400).send(error)
        }
    },
    async updateProduct(req,res){
        const product_id = req.params.product_id
        
        Product.findByIdAndUpdate(product_id, {$set: req.body},(err) => {
            if(!err){
                res.status(200).send({message:"Produto atualizado com sucesso"})
            }else{
                res.status(500).send({message:"ERRO AO ATUALIZAR" + err.message})
            }
        })
    },
    async getProduct(req,res){
        const product_id = req.params.product_id
        try {
            const product = await Product.findById(product_id)
            .populate('username')
            return res.status(200).send(product)
        } catch (error) {
            return res.status(400).send(error)
        }

    },
    async deleteProduct(req,res){
        const product_id = req.params.product_id
        
        Product.findByIdAndDelete(product_id,(err) => {
            if(!err){
                res.status(200).json(Product)
            }else{
                res.status(500).send({message:"ERRO AO DELETAR" + err.message})
            }
        })
    },
    async getUserProduct(req,res){
        const user = req.params.user_id
        const body = req.body



        try {
            const productUser = await Product.find({username: user})
            .populate('username')
            return res.status(200).send(productUser)
        } catch (error) {
            return res.status(400).send({message:`${error}`})
        }
    }
}

module.exports = ProductController