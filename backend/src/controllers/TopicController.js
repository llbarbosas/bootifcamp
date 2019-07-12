const sequelize = require('../server');
const topic = sequelize.import('../models/Topic');

class TopicController{
    async create(req,res){
        try{
            const result = await topic.create(req.body);
            res.json(result);
        }catch(e){
            res.status(500).send(e);
        }
    }
    async deleteTopic(req,res){
        try{
            const NumberOfTopicsDeleted = await topic.destroy({ where: {subjectId: req.body.subjectId, id: req.body.topicId}});
            res.send("Número de tópicos destrúidos: " + NumberOfTopicsDeleted);
        }catch(e){
            console.log(e);
        }
    }
}
module.exports = new TopicController();