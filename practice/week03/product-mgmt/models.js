/**
 * @file models.js
 * @description models establishes connection to Mongodb atlas, creates database, product model to manage product collection
 * @requires mongoose
 */
const mongoose = require('mongoose');

// Connection string
const db = "ecommerce";
const connstr = `mongodb+srv://tmtuan:mypassword@cosc3060.rqcqojz.mongodb.net/${db}?retryWrites=true&w=majority&appName=cosc3060`;

// Connect to MongoDB 
mongoose.connect(connstr)
        .then(() => console.log("Successfully connected to MongoDB Atlas"))
        .catch((error) => console.log("Cannot connect to MongoDB. The reason is " + error.message));

// Define Product schema
const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String]
})

// Product product Model
const Product = mongoose.model("Product", productSchema);

// Export Product model for usage in other files
module.exports = { Product };