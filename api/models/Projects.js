var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
    id: Number,
    name: String,
    img: String,
    description: String,
    stack: String,
    githubUrl: String,
    liveUrl: String

});

module.exports = mongoose.model('Project', ProjectSchema);


