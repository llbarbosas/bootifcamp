const sequelize = require("../server")
const subject = sequelize.import('../models/Subject');
class SubjectController{
    async create(req,res){
        try{
            const userData = await subject.create(req.body);
            res.send(userData);
        }catch(e){
            res.status(500).send(e);
        }
    }
}
module.exports = new SubjectController();