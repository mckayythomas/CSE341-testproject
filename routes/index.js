const routes = require('express').Router();

routes.get('/', (req, res) =>{
    res.send('Mariana Rodriuez Fuentes Rivera De Thomas');
});

module.exports = routes;