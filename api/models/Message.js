var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    date: String,
    name: String,
    email: String,
    text: String
});

module.exports = mongoose.model('Message', MessageSchema);


