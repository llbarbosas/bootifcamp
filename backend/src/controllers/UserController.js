const sequelize = require("../server")
const user = sequelize.import('../models/User');
class UserController{
    async create(req,res){
        try{
            const result = await user.create(req.body);
            res.send(result);
        }catch(e){
            res.status(500).send(e);
        }
    }
    async getUserByEmail(req,res){
        try{
            const result = await user.findOne({ where: {email: req.params.email}});
            res.send(result);
        }catch(e){
            res.status(500).send(e);
        }
    }
}
module.exports = new UserController();