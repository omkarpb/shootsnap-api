var express = require('express');
var passport = require('passport');
var User = require('../models/user.model');

var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login/facebook', passport.authenticate('facebook'));

router.get('/facebook/return', passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('http://localhost:4200/');
  });


module.exports = router;
