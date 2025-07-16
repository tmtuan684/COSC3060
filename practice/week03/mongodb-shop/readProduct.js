/**
 * @file readProduct.js
 * @description This file reads documents from the Product collection.
 * It uses the find() method to retrieve all products from the database.
 * @requires mongoose
 */
const { Product } = require('./models');

//Find all products in the Product collection
Product.find()
    .then((products) => console.log(products))
    .catch((error) => console.log(error));