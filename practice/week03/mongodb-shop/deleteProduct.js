/**
 * @file deleteProduct.js
 * @description This file deletes a document in Product collection
 */
const { Product } = require('./models');

// Delete 1 document
Product.deleteOne({name: "Iphone"})
        .then((product) => console.log(product))
        .catch((error) => console.log(error));

// Delete multiple documents
Product.deleteMany({category: "Electronics"})
        .then((products) => console.log(products))
        .catch((error) => console.log(error));