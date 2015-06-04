var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cars', function(req, res, next) {
  var db = req.db;
  var collection = db.get('carcollection');
  collection.find({},{},function(e,docs){
      res.render('cars', {
          "cars" : docs
      });
  });
});



module.exports = router;
