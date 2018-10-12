var express = require('express');
var router = express.Router();
var key = "value";
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.render('index', { title: 'Express' });
});

module.exports = router;
