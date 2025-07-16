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

// Close connection after model has been created and connection is open
mongoose.connection.once('open', async () => {
    // Create a model from the schema
    const User = mongoose.model('User', userSchema);
    console.log("User model created.");
    // Create a user document
    try {
        const user = new User({
            firstName: 'Robert',
            lastName: 'Barron',
            email: 'robert.barron@email.com',
            age: 60
        });
        await user.save();
        console.log("User document created.");
    } catch (error) {
        console.log("Error creating user document: " + error.message);
    }
    await mongoose.connection.close();
    console.log("Connection closed.");
});


