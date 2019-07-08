const sequelize = require('../server');
const Topic = sequelize.import('../models/Topic');

class TopicController{
    async create(req,res){
        try{
            const result = await Topic.create(req.body);
            res.json(result);
        }catch(e){
            res.status(500).send(e);
        }
    }
}
module.exports = new TopicController();