const sequelize = require("../server")
const user = sequelize.import('../models/User');
class UserController{
    async create(req,res){
        try{
            if(await user.findOne({ where: {email: req.body.email}})){
                res.status(400).json({error : "User already exist"});
            }
            const result = await user.create(req.body);
            res.json(result);
        }catch(e){
            res.status(500).json({error : `${e}`});
        }
    }
    async getUserByEmail(req,res){
        try{
            const result = await user.findOne({ where: {email: req.params.email}});
            if(!result){
                res.status(404).json({error : "User not found" })
            }
            res.json(result);
        }catch(e){
            res.status(500).json({error : `${e}`});
        }
    }
}
module.exports = new UserController();