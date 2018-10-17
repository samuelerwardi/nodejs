var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var data = []
var config = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : "nodejs"
}


/* GET index page. */
router.get('/:id', function(req, res, next) {
  let response = {}
  let connection = mysql.createConnection(config);
  connection.connect();
  connection.query('SELECT * from users', function (err, rows, fields) {
    if (err) {
      throw err
    }
    console.log('Rows : ', rows)
    response.title = "Development : " + req.params.id
    response.code = 200
    response.data = rows
    console.log( req.params);
    connection.end();
    res.send(response);  
  })

	// res.send()
	// console.log("asdf");
	// console.log("req.baseUrl : " + req.baseUrl);
	// console.log("req.params : " + req.params.id);
});


router.post('/',function(req, res, next) {
  var sql = "INSERT INTO users(username, password) VALUES ('"+req.body.username+"', '"+ req.body.password +"')";
  let connection = mysql.createConnection(config);
  connection.connect();
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  res.send({"success" : "1 record inserted"})
});
// router.get('/development/:id', function(req, res, next) {
// 	res.render('index', { title: 'Development' });
// // // res.send()
// 	console.log("asdsssf");
// // 	console.log(req.baseUrl);
// // 	console.log("req.params : " + req.params.id);
// });

module.exports = router;
