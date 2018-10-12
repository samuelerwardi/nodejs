var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : "nodejs"
});

connection.connect()

connection.query('SELECT * from users', function (err, rows, fields) {
  if (err) throw err

  console.log('Rows : ', rows)
})

connection.end()
/* GET index page. */
router.get('/:id', function(req, res, next) {
	console.log( req.params);
	res.render('index', { title: 'Development : ' + req.params.id });
	// res.send()
	// console.log("asdf");
	// console.log("req.baseUrl : " + req.baseUrl);
	// console.log("req.params : " + req.params.id);
});

// router.get('/development/:id', function(req, res, next) {
// 	res.render('index', { title: 'Development' });
// // // res.send()
// 	console.log("asdsssf");
// // 	console.log(req.baseUrl);
// // 	console.log("req.params : " + req.params.id);
// });

module.exports = router;
