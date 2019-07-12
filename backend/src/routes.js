const express = require('express');
const routes = express.Router();
const userController = require('./controllers/UserController');
const subjectController = require('./controllers/SubjectController');
const topicController = require('./controllers/TopicController');

routes.post('/topic', topicController.create);
routes.delete('/topic', topicController.deleteTopic);
routes.post('/user', userController.create);
routes.get('/user/:email', userController.getUserByEmail);
routes.get('/subject/:subjectName', subjectController.getSubjectByName);
routes.post('/subject', subjectController.create);
routes.delete('/subject', subjectController.deleteSubject);

module.exports = routes;