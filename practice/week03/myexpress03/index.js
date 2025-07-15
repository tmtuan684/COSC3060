/**
 * @file index.js
 * @description This is an Express server with middleware  
 * 
 */
const express = require('express');
const app = express();
const port = 3000;

// Middleware to log request details
// express.urlencoded is used to parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(express.urlencoded({ extended: true }));

//Routes
app.get('/', (req, res) => {
  res.send(`Query string: ${req.query.yourEmail || 'No name provided'}`);
});

app.post('/submit', (req, res) => { // in Postman, set form-data type to 'x-www-form-urlencoded'
    console.log("Data received from the frontend for POST form:");
    console.log(`Username: ${req.body.yourName}`);

     // Send a response back to the client
    res.send('Post Form submitted!');
}); 

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});