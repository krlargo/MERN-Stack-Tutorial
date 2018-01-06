const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// Not assigned to a variable; simply needs to be called and ran with no return value
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();
// require() returns a function, 'app' is passed as parameter
require('./routes/authRoutes')(app); // Assign 'app' methods that were set in authRoutes

// Look at underlying environment and see if a PORT is declared
const PORT = process.env.PORT || 5000; // 5000 is default value in case of null
// Tells NODE which port to listen for
app.listen(PORT);
