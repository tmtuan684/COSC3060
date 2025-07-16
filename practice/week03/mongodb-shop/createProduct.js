/**
 * @file node createProduct.js
 * @description This file creates documents of Product collection
 * uses .save() method to save the document to the database.
 * @requires mongoose
 */
const { Product } = require('./models');

const newProduct = new Product({
    name: 'Sample Product',
    price: 100,
    category: 'Electronics'
});

newProduct.save()
    .then((product) => console.log(product))
    .catch((error) => console.log(error));