const express = require('express');
const postController = require('./controllers/postController');
const likeController = require('./controllers/likeController');
const deslikeController = require('./controllers/deslikeController');
const productController = require('./controllers/productController');
const stockController = require('./controllers/stockController');
const AuthController = require("./controllers/AuthController");

const authMiddleware = require("./middlewares/auth");
const aclMiddleware = require("./middlewares/acl");

const routes = express.Router();

/**
 * Authenticate routes
 */
routes.post("/auth/register", AuthController.register);
routes.post("/auth/authenticate", AuthController.authenticate);
routes.post("/auth/get_user_by_id", authMiddleware, AuthController.getUserById);
routes.post("/auth/forgot_password", AuthController.forgotPassword);
routes.post("/auth/reset_password", AuthController.resetPassword);

/**
 * Project routes
 */
routes.post('/devs/:devId/likes', likeController.store);
routes.post('/devs/:devId/deslikes', deslikeController.store);
routes.get('/devs', deslikeController.index);
routes.delete('/devs', deslikeController.delete);
routes.post('/devs', postController.store);
routes.get('/devs/:id', postController.store);
routes.get('/products/', productController.index);
routes.get('/stocks/', stockController.index);
routes.get('/products/:id', productController.getbyid);
routes.get('/stock/:id', authMiddleware, stockController.getbyid);

module.exports = routes;