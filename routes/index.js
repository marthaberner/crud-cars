var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cars', function(req, res, next) {
  res.render('cars', { title: "Crud Cars" });
});

module.exports = router;
