var User = require('./models/User.js');

var userId = 0;


User.find(function (err, users) {
    if (err) return next(err);
    userId = users[0].id;
});

var validateAuth = function(id) {
    return (userId === id);
};

module.exports = validateAuth;