const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// Not assigned to a variable; simply needs to be called and ran with no return value
// User import needs to come before passport import since passport uses User class model
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // last 30 days
    keys: [keys.cookieKey] // Allowed keys for app to randomly use for cookie
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // Assign 'app' methods that were set in authRoutes

// Look at underlying environment and see if a PORT is declared
const PORT = process.env.PORT || 5000; // 5000 is default value in case of null
// Tells NODE which port to listen for
app.listen(PORT);
