const routes = require('express').Router();
const name = require('../controllers/index')

routes.get('/', name.displayName);

module.exports = routes;