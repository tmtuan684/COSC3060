/**
 * @file db-create.js
 * @description This program creates a new database on MongoDB Atlas.
 * @requires mongoose
 */

const mongoose = require('mongoose');

// Connect string found in MongoDB Atlas
const connString = `mongodb+srv://tmtuan:mypassword@cosc3060.rqcqojz.mongodb.net/db4?retryWrites=true&w=majority&appName=cosc3060`;

mongoose.connect(connString)
    .then(() => console.log("Successfully connected to MongoDB Atlas"))
    .catch((error) => console.log("Cannot connect to MongoDB Atlas. The reason is: " + error.message));

// Create a collection schema in the database 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
}); 
// For a database to be created, at least one collection must be created
const User = mongoose.model('User', userSchema);