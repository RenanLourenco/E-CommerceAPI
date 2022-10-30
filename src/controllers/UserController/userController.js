const user = require('../../models/User')

const UserController = {

    async createUser(req,res){
        const body = req.body

        try {
            const newUser = await user.create(body)
            return res.status(201).json(newUser)
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async getUsers(req,res){
        user.find()
            .exec((err,user)=>{
                res.status(200).json(user)
            })
    },

    async getUser(req,res){
        let id = req.params.user_id
        user.findById(id)
            .exec((err,user)=>{
                if(err){
                    res.status(400).send({message:'Usuario não encontrado'})
                }else{
                    res.status(200).send(user)
                }
            })
    }




}

module.exports = UserController