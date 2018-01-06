const express = require('express');
require('./services/passport'); // Not assigned to a variable; simply needs to be called

const app = express();

// Look at underlying environment and see if a PORT is declared
const PORT = process.env.PORT || 5000; // 5000 is default value in case of null
// Tells NODE which port to listen for
app.listen(PORT);
