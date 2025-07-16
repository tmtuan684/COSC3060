/**
 * @file updateProduct.js
 * @description This file updates Product document in Product collection
 */
const { Product } = require('./models');

// Update 1 document
Product.updateOne({name: 'Macbook'}, {name: 'Iphone'} )
        .then((product) => console.log(product))
        .catch((error) => console.log(error));

// Update many documents
Product.updateMany({category: 'Electronics'}, { price: 350 })
        .then((products) => console.log(products))
        .catch((error) => console.log(error))        