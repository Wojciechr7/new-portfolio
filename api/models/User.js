var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    id: Number
});

module.exports = mongoose.model('User', UserSchema);