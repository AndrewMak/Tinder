const stock = require('../models/stock');

module.exports = {
    async index(req, res) {

        const stocks = await stock.find()

        return res.json(stocks);
    },
    async getbyid(req, res) {
        const id = req.params.id;
        const response = await stock.findOne({ id })

        return res.json(response);
    }
}