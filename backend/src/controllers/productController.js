const product = require('../models/product');

module.exports = {
    async index(req, res) {

        const products = await product.find()

        return res.json(products);
    },
    async getbyid(req, res) {
        const id = req.params.id;
        const response = await product.findOne({ id })

        return res.json(response);
    },
    async getbyfilter(req, res) {
        const {valor} = req.params;

        const response = await product.find({  price: { $gte: valor}})

        return res.json(response);
    }
}