var express = require('express');
var router = express.Router();

var Message = require('../models/Message.js');

var valid = require('../auth');


router.get('/:pas', function (req, res, next) {
    Message.find(function (err, messages) {
        if (err) return next(err);
        if (valid(parseInt(req.params.pas))) {
            res.json(messages);
        }
    });
});


router.post('/:pas', function (req, res, next) {
    Message.create(req.body, function (err, post) {
        if (err) return next(err);
        if (valid(parseInt(req.params.pas))) {
            res.json(post);
        }
    });
});
router.post('/', function (req, res, next) {
    Message.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});



router.get('/:id', function (req, res, next) {
    Message.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.put('/:pas&:id', function (req, res, next) {
    console.log(req.params);
    Message.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        if (valid(parseInt(req.params.pas))) {
            res.json(post);
        }
    });
});


router.delete('/:pas&:id', function (req, res, next) {
    Message.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        if (valid(parseInt(req.params.pas))) {
            res.json(post);
        }
    });
});

module.exports = router;