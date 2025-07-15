/**
 *  @file index.js
 * @description This is a simple Express server with one route.
 * @author Tuan Tran
 */
const express = require('express');
const app = express();
const host = '127.0.0.1';
const port = 5000;

// Default route for the home page
app.get('/', function(req, res) {
    res.send('This is an Express server!');
});

app.listen(port, host, function() { 
    console.log(`Server is linstening on http://${host}:${port}`);
});