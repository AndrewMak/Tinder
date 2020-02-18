const stock = require('../models/stock');

module.exports = {
    async index(req, res) {

        const stocks = await stock.find()

        return res.json(stocks);
    }
}