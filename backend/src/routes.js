const express = require('express');
const routes = express.Router();
const userController = require('./controllers/UserController');
const subjectController = require('./controllers/SubjectController');

//routes.get('/usuario/:id', userController.findUser);
routes.post('/user', userController.create);
routes.get('/user/:email', userController.getUserByEmail);
routes.post('/subject', subjectController.create);


module.exports = routes;