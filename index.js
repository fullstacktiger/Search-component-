const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const session = require('express-session');
var url = require('url');

/* App Setup */
const app = express();

/* session setup */

app.use(session({
  secret: 'example',
  saveUninitialized: true,
  resave: false,
})); // TODO: find out what this is

/* Configure bodyParser */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Configure cross-domain */
// const crossDomain = require('./src/middleware/crossDomain');
// app.use(crossDomain);

/* Authenticated Routes */
// const checkAuth = require('./src/middleware/check-auth');
// app.use(checkAuth);

/* Configure Routes */

// const rootRoute = require('./src/routes/api');
// const usersRoute = require('./src/routes/api/users');

// app.use('/api', rootRoute);
// app.use('/api/users', usersRoute);

app.get('/api/list_restaurants', async (req, res) => {
  const filter = req.query.filter || '';

  const restaurants = await axios.get('http://localhost:5000/api/v1/restaurants/', {params: {filter}});
  console.log(restaurants.data);
  return res.json(restaurants.data);
});

/* Start the server */
const port = process.env.PORT || 5001;
app.listen(port);
console.log('Magic happens on port ' + port);
