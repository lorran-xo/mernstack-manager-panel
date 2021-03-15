var createError = require('http-errors');
//############################
var express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
var app = express();
const cors = require('cors')
//############################
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//##### 1st FOLDER ROUTES IMPORTS #####
var indexRouter = require('./routes/index');
var testApiRouter = require('./routes/testeApi')
var signUpRoute = require('./routes/signUp')
var insertProductRoute = require('./routes/insertProduct')
//##### 1st ROUTES IMPORTS #####


dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected.")) 
//Passando acesso por arquivo .env

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//##### 2nd ROUTES CREATIONS #####
app.use(express.json());
app.use('/', indexRouter);
app.use('/testApi', testApiRouter);//teste
app.use('/signup', signUpRoute);//teste
app.use('/insertProduct', insertProductRoute);
app.listen(9000, () => console.log("server is up and running"))
//##### 2nd ROUTES CREATIONS #####

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
