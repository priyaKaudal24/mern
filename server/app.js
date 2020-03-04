const express = require("express");
const bodyParser = require("body-parser");
const app = express();
 var indexRouter = require('./routes/index');
 var usersRouter = require('./routes/users');
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));