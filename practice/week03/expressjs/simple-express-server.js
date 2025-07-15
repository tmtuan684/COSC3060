/**
 * @file simple-express-server.js
 * @description Simple Express server setup
 * @requires express module
 * 
 */
const express = require('express');
const app = express();
const hostname = 'localhost';
const port = 3000;

// Define Server and its routes
app.get('/', (req, res) => {
    res.send('Hello Friends from RMIT COSC3060! This is Express server!');
});

app.listen(port, hostname, () => {
    console.log(`Server is running at http://localhost:${port}`);
});