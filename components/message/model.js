const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: {type: String, required: true},
    message: String,
    date: Date,
});

const model = mongoose.model('Message', mySchema)
module.exports = model;