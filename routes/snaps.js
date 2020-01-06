var express = require('express');
var router = express.Router();
var Snap = require('../models/snaps.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Snap.find({}, function(err, docs) {
        if(err) {
            next(err, req, res, next);
        } else {
            res.send(docs);
        }
    });
});

router.post('/', function(req, res, next) {
    var snapData = req.body;
    var snap = new Snap({ ...snapData });
    snap.save(function(err, doc) {
        if(err) {
            next(err, req, res, next);
        } else {
            res.send(doc)
        }
    });
});

router.put('/:id', function(req, res, next) {
    var snapData = req.body;
    console.log('snapData', snapData);
    let { id } = req.params;
    Snap.update({_id: id}, snapData, function(err, result) {
        if(err) {
            next(err, req, res, next);
        } else {
            res.send(result);
        }
    })
});
module.exports = router;
