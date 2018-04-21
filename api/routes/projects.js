var express = require('express');
var router = express.Router();
var multer  = require('multer');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'api/public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

var upload = multer({ storage: storage });



var Project = require('../models/Projects.js');


router.get('/', function(req, res, next) {
    Project.find(function (err, projects) {
        if (err) return next(err);
        res.json(projects);
    });
    
});


router.post('/', function(req, res, next) {
    Project.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/img', upload.single('project-image'), function(req, res, next) {
    res.json();
});



router.get('/:id', function(req, res, next) {
    Project.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.put('/:id', function(req, res, next) {
    Project.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.delete('/:id', function(req, res, next) {
    Project.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;