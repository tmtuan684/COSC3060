/**
 * @file index.js
 * @description Express server with middleware to server stattic files
 * @requires express, express.static
 */
const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Route
app.get(['/','/index'], (req, res) => {
  res.render('index'); // Render the index page
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});