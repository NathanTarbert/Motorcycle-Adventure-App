var express = require('express');
var router = express.Router();
const Video = require('../models/video');

/* GET logged in user home page. */
router.get('/', function(req, res, next) {
  Video.find().then((results) => {
    // console.log('video', results);
    res.render('home', { title:"Welcome to your home page", video: results, user: req.user });
  });
});



module.exports = router;