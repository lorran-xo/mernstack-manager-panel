var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
var app = express();
const cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//##### 1st FOLDER ROUTES IMPORTS #####
var indexRouter = require('./routes/index');
// Produtos
var listStock = require('./routes/listStock')
var insertProductRoute = require('./routes/insertProduct')
var updateProductRoute = require('./routes/updateProduct')
var deleteProductRoute = require('./routes/deleteProduct')
// Financeiro
var insertFinancialsRoute = require('./routes/insertFinancials')
var listFinancialsRoute = require('./routes/listFinancials')
var updateFinancialsRoute = require('./routes/updateFinancials')
//Config
var uploadImageRoute = require('./routes/uploadImage')
//##### 1st ROUTES IMPORTS #####

dotenv.config()
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected.")) //Passando acesso banco por arquivo .env

// view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//rotas
app.use(express.json());
app.listen(9000, () => console.log("server is up and running"))
app.use('/', indexRouter); //rota padrao de conexao e teste NodeJS
app.use('/listStock', listStock);
app.use('/insertProduct', insertProductRoute);
app.use('/updateProduct', updateProductRoute);
app.use('/deleteProduct', deleteProductRoute);

app.use('/listFinancials', listFinancialsRoute);
app.use('/insertFinancials', insertFinancialsRoute);
app.use('/updateFinancials', updateFinancialsRoute);

app.use('/uploadImage', uploadImageRoute);

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
