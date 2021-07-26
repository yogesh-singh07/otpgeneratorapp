const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const port = process.env.PORT || 3000,

  app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

// catch 404 and and send a resource not found error
app.use(function (req, res, next) {
  res.status(404);
  res.json({ message: "Resource not found" }).end();
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send('Please try after sometime');
});

app.listen(port);
console.log("App stared successfully at http://localhost:3000")

module.exports = app;
