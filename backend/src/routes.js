const express = require('express');

const UsersController = require('./controllers/UsersController');
const ClientsController = require('./controllers/ClientsController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);

routes.get('/clients', ClientsController.index);
routes.post('/clients', ClientsController.create);

module.exports = routes;