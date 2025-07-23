/**
 * @description This program demonstrates a 1-to-many relationship with reference data between 2 documents
 */
const { getConnString } = require('../dbsupport');
const mongoose = require('mongoose');

// Make connection tring
const db = "Book&PublisherDB";
const connstr = getConnString(db);

// Connect MongoDB Atlas
mongoose.connect(connstr)
        .then(() => console.log(`Successfully connected to ${db}`))
        .catch((error) => console.log(`Failed to connect to ${db}. Error: ${error.message}`));

// Publisher Schema and Model
const publisherSchema = mongoose.Schema({
    id: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    found: Number
});

const Publisher = new mongoose.model("Publisher", publisherSchema);

//Book Schema and Model
const bookSchema = mongoose.Schema({
    id: { type: String, required: true, unique: true},
    title:{ type: String, required: true},
    publisher_id: {type: String, ref: 'Publisher'}
});

const Book = new mongoose.model("Book", bookSchema);

// Sample data
// Add a publisher to DB
const p = {id: "oreilly", name: "O'Reilly Media", found: 1980 } 
const publisher = new Publisher(p);
publisher.save()
        .then(() => {
            console.log(`${publisher.name} added to DB`);
            
            // Add 2 books of the above publisher to DB
            const b1 = {id: "1001", title: "MongoDB: The Definitive Guide" , publisher_id : publisher._id};
            const b2 = {id: "1002", title: "50 tips and tricks for MongoDB Developer" , publisher_id : publisher._id};
            const books = [b1, b2]
            books.forEach(async (b) => {
                await new Book(b).save()
                                 .then(saved => console.log(`${saved.title} has been successfully added`))
                                 .catch((error) => console.error(error.message))
            })
        })
        .catch((error) => {
            console.error(error.message); 
            return; 
        })


