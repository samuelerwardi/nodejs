var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var developmentRouter = require('./routes/development');
var restRouter = require('./routes/rest');
var restMvcRouter = require('./routes/rest-mvc');
var app = express();

app.samuel = "value samuel";
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
// app.use('/development/users/:userId/books/:bookId', function (req, res, next) {
// 		    req.params = {
// 		        name: 'Bear',
// 		        says: 'rawr'
// 		    };
// 		    console.log('Accessing the secret section ...' + req)
// 		    next()
// 		},
// 		developmentRouter)

app.use('/rest', restRouter);
app.use('/rest-mvc', restMvcRouter);
app.use('/development', developmentRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
