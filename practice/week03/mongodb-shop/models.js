/**
 * @file models.js
 * @description This file defines The Mongoose models for the MongoDB database.
 * @reuires mongoose 
*/
const mongoose = require('mongoose');

// connection string found in MongoDB Atlas
const db = "shopDB";
const connString = `mongodb+srv://tmtuan:mypassword@cosc3060.rqcqojz.mongodb.net/${db}?retryWrites=true&w=majority&appName=cosc3060`;

// Connect to MongoDB Atlas
mongoose.connect(connString)
    .then(() => console.log("Successfully connected to MongoDB Atlas"))
    .catch((error) => console.log("Cannot connect to MongoDB Atlas. The reason is: " + error.message));

// Define a schema for a product
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String
});

// Produce product model
const Product = mongoose.model("Product", productSchema);

module.exports = { Product };