/**
 * @file book-construction.js
 * @description This program define a class book and construct class object
 */

// Define class Book
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getYear() {
        return this.year;
    }
    /* Display book info to console00*/
    printInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Year: ${this.year}`);
    }
}    
// Define methods of an object of a class

// Construct a book
const philosophyBook = new Book("Socratic logic", "Peter Kreeft", "1993");

console.log("Book's details: ");
console.log("-----------------");
philosophyBook.printInfo();
