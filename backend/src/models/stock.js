const { Schema, model } = require('mongoose');

const stockSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true,
    });

module.exports = model('stock', stockSchema);
