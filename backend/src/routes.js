const express = require('express');
const routes = express.Router();
const userController = require('./controllers/UserController');
const subjectController = require('./controllers/SubjectController');
const topicController = require('./controllers/TopicController');


routes.post('/topic', topicController.create);
routes.post('/user', userController.create);
routes.get('/user/:email', userController.getUserByEmail);
routes.post('/subject', subjectController.create);


module.exports = routes;