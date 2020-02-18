const express = require('express');
const postController = require('./controllers/postController');
const likeController = require('./controllers/likeController');
const deslikeController = require('./controllers/deslikeController');
const productController = require('./controllers/productController');
const stockController = require('./controllers/stockController');


const routes = express.Router();

routes.post('/devs/:devId/likes', likeController.store);
routes.post('/devs/:devId/deslikes', deslikeController.store);
routes.get('/devs', deslikeController.index);
routes.delete('/devs', deslikeController.delete);
routes.post('/devs', postController.store);
routes.get('/devs/:id', postController.store);
routes.get('/products/', productController.index);
routes.get('/stocks/', stockController.index);
routes.get('/products/:id', productController.getbyid);
routes.get('/stock/:id', stockController.getbyid);

module.exports = routes;