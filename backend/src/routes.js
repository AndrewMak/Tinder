const express = require('express');
const postController = require('./controllers/postController');
const likeController = require('./controllers/likeController');
const deslikeController = require('./controllers/deslikeController');
const productController = require('./controllers/productController');
const stockController = require('./controllers/stockController');
const AuthController = require("./controllers/authController");
const FileController = require("./controllers/fileController");

const multer = require("multer");
const multerConfig = require("./services/multer");
const authMiddleware = require("./middlewares/auth");
//middleware de perfil de usuario
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
routes.post('/devs/:devId/likes', authMiddleware, likeController.store);
routes.post('/devs/:devId/deslikes', authMiddleware, deslikeController.store);
routes.get('/devs', authMiddleware, deslikeController.index);
routes.delete('/devs', authMiddleware, deslikeController.delete);
routes.post('/devs', authMiddleware, postController.store);
routes.get('/devs/:id', authMiddleware, postController.store);
routes.get('/products/', authMiddleware, productController.index);
routes.get('/stocks/', authMiddleware, stockController.index);
routes.get('/products/:id', authMiddleware, productController.getbyid);
routes.get('/stock/:id', authMiddleware, stockController.getbyid);



routes.get("/posts", FileController.index);
routes.post("/posts", multer(multerConfig).single("file"), FileController.store);
routes.delete("/posts/:id", FileController.delete);

module.exports = routes;