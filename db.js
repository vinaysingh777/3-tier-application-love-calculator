const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    name1: String,
    name2: String,
    score: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
