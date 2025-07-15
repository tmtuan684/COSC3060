/**
 * @file index.js
 * @description This is a simple express server with basic routes
 * @author Tuan Tran
 */
const express = require('express');
const app = express();  // Create an object of express
const port = 3000;

// Routes
app.get('/index', function(req, res) {
  res.send('Welcome, to my 2nd server. This is Index page!');
});
app.get('/about', function(req, res) {
  res.send('About page!');
});
app.get('/contact', function(req, res) {
    res.send('Contact page!');
});
app.get(['/info', '/details'], function(req, res) { // route with multiple paths    
  res.send('Info or details page!');
});

app.get(/(.*)/, function(req, res) {  // catch-all route
  res.status(404).send('This page does not exist! 404 Page!');
});

app.listen(port, function() {
  console.log(`Server is running on http://localhost:${port}`);
});

