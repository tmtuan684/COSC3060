/**
 * @file queryProduct.js
 * @description This file queries documents of Product collection
 */
const { Product } = require('./models');

Product.find({price: { $gt: 200}})
        .then((Products) => console.log(Products))
        .catch((error) => console.log(error));

Product.find({ $or: [{ category: "Electronics" }, 
                     { price: { $lt: 100 } }]
             })
        .then((products) => console.log(products))
        .catch((error) => console.log(error));