const product = require('../models/product');

module.exports = {
    async index(req, res) {

        const products = await product.find()

        return res.json(products);
    }
}