/**
 * @file db-schema.js
 * @description This program defines schema for a MongoDB database.
 * @requires mongoose
 */
const mongoose = require('mongoose');

// Connect string found in MongoDB Atlas
const db = "schemaDB";
const connString = `mongodb+srv://tmtuan:mypassword@cosc3060.rqcqojz.mongodb.net/${db}?retryWrites=true&w=majority&appName=cosc3060`;

// Try to connect to the database
mongoose.connect(connString)
    .then(() => console.log("Successfully connected to MongoDB Atlas"))
    .catch((error) => console.log("Cannot connect to MongoDB Atlas. The reason is: " + error.message));

// Define a schema for a collection
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true},
    age: Number,
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

// Add a sample user document
const user = new User({
            firstName: 'Robert',
            lastName: 'Barron',
            email: 'robert.barron@email.com',
            age: 60
        });
user.save()
    .then(() => console.log("Sample user document created"))
    .catch((error) => console.error("Error creating sample user document:", error.message));

// Export the User model for use in other files
module.exports = { User }
        

