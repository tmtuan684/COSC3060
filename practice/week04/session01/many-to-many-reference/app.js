/**
 * @description This program demonstrates a many-to-many relationship with reference data between 2 documents
 */
const { getConnString } = require('../dbsupport');
const mongoose = require('mongoose');

// Make connection tring
const db = "Book&Author";
const connstr = getConnString(db);

// Connect MongoDB Atlas
mongoose.connect(connstr)
        .then(() => console.log(`Successfully connected to ${db}`))
        .catch((error) => console.log(`Failed to connect to ${db}. Error: ${error.message}`));

// Book Schema and Model
const bookSchema = mongoose.Schema({
    name: {type: String, required: true},
    authors:[{type: String, ref: "Author"}]
});
const Book = new mongoose.model("Book", bookSchema);

// Author Schema and Model
const authorSchema = mongoose.Schema({
    author_id: {type: String, required: true, unique: true},
    name: {type: String, required: true}
});
const Author = new mongoose.model("Author", authorSchema);

// Sample data
// Authors
const a1 = {author_id: "a1", name: "C.S.Lewis" };
const a2 = {author_id: "a2", name: "J.R.R. Tokien"};
const a3 = {author_id: "a3", name: "Peter Kreeft"};

const authors = [a1, a2, a3]
authors.forEach(async (a) => {
        await Author(a).save()
            .then((author) => console.log(`${author.name} saved in DB`))
            .catch((error) => console.error(`${error.message}`));
})

const b1 = {name: "Chronicle of Narnia", authors: [a1.author_id, a2.author_id]};
const b2 = {name: "The Lord of the Ring", authors: [a2.author_id, a3.author_id]};
const books = [b1, b2];

books.forEach(async (b) => {
    // Check if authors are 
    await Book(b).save()
                .then((book) => {
                console.log(`${book.name} saved in DB`)
            })
        .catch((error) => console.error(`${error.message}`));
})