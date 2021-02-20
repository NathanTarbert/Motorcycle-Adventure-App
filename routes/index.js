var express = require('express');
var router = express.Router();
const {handlebars} = require('hbs');
var router = express.Router();
const Videos = require('../models/video');
const Users = require('../models/user');
/* GET home page. */
router.get('/', function(req, res) {
    Videos.find().then((video) => {
      // console.log('details', video);
      res.render('guest-home', { title: 'Guest Home Page', video: video, user: req.user });
    });
  });

router.get('/logout', function(req, res, next) {
  console.log('user is logging out');
  req.logOut();
  res.redirect('/');
});
module.exports = router;