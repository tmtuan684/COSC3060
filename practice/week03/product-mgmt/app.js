/**
 * @file app.js
 * @description This is the express server for product info; info is from Mongodb Altas
 *              This server uses view template engine
 * @requires express, ejs
 */
const express = require('express');
const { Product } = require('./models');
const app = express();

/** Define the server */
const port = 3000;

// Add middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View engine
app.set('view engine', 'ejs');
app.set('views', './views');

/* Routes */
// READ - Get all product
app.get(['/'], (req, res) => {
    title = 'Product dashboard';
    res.render('index', { title: title })
});

// CREATE - Form to add new product
app.get('/product/new', (req, res) => {
    res.render('create-product');
});

// CREATE - Process adding of new product
app.post('/product', (req, res) => {
    const product = new Product(req.body);
    product.save()
            .then(() => res.redirect('/products'))
            .catch((error) => res.send(error));
});

// READ - Get all product
app.get(['/products'], (req, res) => {
    Product.find({})
        .then((products) => {
            title = "Product list"
            res.render('product-listing', {title: title, productList: products})
        })
        .catch((error) => res.send(error.message));
});
// UPDATE - Form to update a product
app.get('/product/:id/update', (req, res) => {
    Product.findById(req.params.id)
            .then(product => {
                if (!product) {
                    return res.send("We do not have this product")
                }
                title = "Update product"
                res.render('update-product', { title: title, product: product });
            })
            .catch(error => res.send(error));
});
// UPDATE - update a product
app.post('/product/:id/update', (req, res) => {
    
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(product => {
                if(!product) {
                    return res.send("We do not have this product!")
                } 
                console.log(`Updated: ${product}`);
                res.redirect('/products')
            })
            .catch(error => res.send(error.message));   
});
// DELETE - Show delete product form
app.get('/product/:id/delete', (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (!product) {
        return res.send('Not found any product matching the ID!');
      }
      title = "Delete product";
      res.render('delete-product', { title: title, product: product });
    })
    .catch(error => res.send(error));
});

// DELETE - Delete a product by ID
app.post('/product/:id/delete', (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(product => {
      if (!product) {
        return res.send('Not found any product matching the ID!');
      }
      res.redirect('/products');
    })
    .catch(error => res.send(error));
});

// Start server 
app.listen(port, () => console.log(`Server is listening on port ${port}`));