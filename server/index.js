// How we import through server-side since node doesn't support 'import'
const express = require('express');
const app = express(); // The running express server

// .get(): creates a Route Handler that is watching for incoming HTTP requests
// with the GET method (gets info about a particular record)

// '/' the 'Route Portion' of the handler

// req: JS object for request
// res: represents the response to the requests

// res.send(): close request and send response 'hi: 'there''
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// Tells NODE to listen at port 5000; hence localhost:5000
app.listen(5000);
