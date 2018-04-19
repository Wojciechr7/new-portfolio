var express = require('express');
var router = express.Router();

var Message = require('../models/Message.js');


router.get('/', function(req, res, next) {
  Message.find(function (err, messages) {
    if (err) return next(err);
    res.json(messages);
  });
});


router.post('/', function(req, res, next) {
  Message.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.get('/:id', function(req, res, next) {
  Message.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.put('/:id', function(req, res, next) {
  Message.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.delete('/:id', function(req, res, next) {
  Message.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;