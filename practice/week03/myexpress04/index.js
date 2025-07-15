/**
 * @file index.js
 * @description Express server with view engine EJS to render HTML pages
 * @requires express, ejs
 */
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', './views'); // Set the directory for views

//Routes
app.get('/', (req, res) => {
    // Render the welcome page with a title and message
    let title = 'Welcome';
    let message = 'Welcome to my Express app!';
    res.render('template', { title, message })
});

app.get('/about', (req, res) => {
    // Render the about page with a title and message
    let title = 'About Us';
    let message = 'This is the about page.';  
    res.render('template', {title, message });
});

app.get('/contact', (req, res) => {
    // Render the contact page with a title and message
    let title = 'Contact Us';   
    let message = 'Feel free to reach out via email or phone.';
    res.render('template', {title, message });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});