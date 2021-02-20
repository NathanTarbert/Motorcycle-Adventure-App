var express = require('express');
var router = express.Router();
const {handlebars} = require('hbs');
var router = express.Router();
const Video = require('../models/video');
const User = require('../models/user');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  console.log('this is the id', id);
  Video.findOne({_id: id})
    .then((video) => {
      // console.log("The single video results from details route are ", video);
      // console.log("the accessories results from details route are ", results.accessories);
    //   let accessories = results.accessories;
      res.render('course-details', { video: video, user: req.user });
    }); 
});

module.exports = router;