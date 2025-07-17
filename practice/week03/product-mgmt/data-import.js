  /**
   * @file data-import.js
   * @description This file imports data in json file to mongoDB database
   * @requires fs, JSON Object
   */
const fs = require('fs');
const { Product } = require('./models');
const chalk = require('chalk');

const filepath = './data/sample-products.json';

// Read file asynchronously
fs.readFile(filepath, (err, data) => {
    if(err) {
        console.error(`File not successfully read. The reason is ${err.message}`);
        process.exit(1);
    }
    // data is sucessfully read. Now, parse it to JSON. (Explore the structure of this JSON before doing the next step) 
    try {
        
        const products = JSON.parse(data).products;
        
        // Traverse JSON data and add each to db
        for (product of products) {
            // Add product to database
            const doc = new Product(product);   // In NoSQL Db, each record is called a document
            doc.save()
                .then((product) => console.log(`${product['title']} ` + chalk.bgGreen.bold('save')))
                .catch((err) => console.log(err.message));
        }
        
    } catch (err) {
        console.error(`Not successful at sparsing file to json. The reason is ${err.message}`);
    }
});

