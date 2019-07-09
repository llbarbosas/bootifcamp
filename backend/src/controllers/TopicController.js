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
    async getTopicBySubjectId(req,res){
        try{
            const result = await topic.findAll({ where: {subjectId: req.params.subjectId}});
            const topics = result.map(topic => {
                return {
                    "name": topic.name,
                    "content": topic.conteudo
                }
            });
            res.send(topics);
        }catch(e){
            res.status(500).send(e);
        }
    }
}
module.exports = new TopicController();