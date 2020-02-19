const { Schema, model } = require('mongoose');

const QuestionarioSchema = new Schema({
    valor: {
        type: Number,
        required: true,
    },
    tempo: {
        type: Number,
        required: true,
    },
    userid: {
        type: String
    },
},
    {
        timestamps: true,
    });

module.exports = model('questionario', QuestionarioSchema);
