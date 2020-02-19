const express = require('express');
const postController = require('./controllers/postController');
const likeController = require('./controllers/likeController');
const deslikeController = require('./controllers/deslikeController');
const productController = require('./controllers/productController');
const stockController = require('./controllers/stockController');
const AuthController = require("./controllers/authController");
const FileController = require("./controllers/fileController");
const QuestionarioController = require("./controllers/questionarioController");

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
routes.post("/auth/get_user_by_id",  AuthController.getUserById);
routes.post("/auth/forgot_password", AuthController.forgotPassword);
routes.post("/auth/reset_password", AuthController.resetPassword);

/**
 * Project routes
 */
routes.post('/devs/:devId/likes',  likeController.store);
routes.post('/devs/:devId/deslikes',  deslikeController.store);
routes.get('/devs',  deslikeController.index);
routes.delete('/devs',  deslikeController.delete);
routes.post('/devs',  postController.store);
routes.get('/devs/:id',  postController.store);
routes.get('/products/',  productController.index);
routes.get('/stocks/',  stockController.index);
routes.get('/products/:id',  productController.getbyid);
routes.get('/products/filter/:valor',  productController.getbyfilter);

routes.get('/stock/:id',  stockController.getbyid);
routes.post('/questionario/',  QuestionarioController.store);







routes.get("/posts", FileController.index);
routes.post("/posts", multer(multerConfig).single("file"), FileController.store);
routes.delete("/posts/:id", FileController.delete);

module.exports = routes;