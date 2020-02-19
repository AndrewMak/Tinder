const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    preview1: {
        type: String,
        required: true,
    },
    preview2: {
        type: String,
        required: true,
    },
    percentual: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true,
    });

module.exports = model('product', productSchema);
