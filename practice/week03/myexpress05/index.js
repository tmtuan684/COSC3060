/**
 * @file index.js
 * @description Express server with template engine EJS with control statements
 * @author Tuan Tran
 * @date 2025-01-01
 * @version 1.0.0
 * @requires express, ejs
 */
const express = require('express');
const app = express();
const port = 3000;  

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Data
const productData = [
    {name: 'Laptop', price: 1200, stock: 50},
    {name: 'Smartphone', price: 800, stock: 200},
    {name: 'Tablet', price: 600, stock: 180},
    {name: 'Smartwatch', price: 300, stock: 150},
    {name: 'Headphones', price: 150, stock: 300}
];

//Routes
app.get('/product-listing', (req, res) => {
    // Render the product listing page with product data
    res.render('product-listing', { products: productData });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
