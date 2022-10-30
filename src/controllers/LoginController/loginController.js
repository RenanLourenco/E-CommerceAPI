const User = require('../../models/User')

const LoginController = {

    async createSession(req,res){
        const username = req.body.username

        try {
            const usuario = await User.findOne({username})
            return res.status(200).json(usuario)
        } catch (error) {
            return res.status(400).json(error)
        }
    }


}

module.exports = LoginController