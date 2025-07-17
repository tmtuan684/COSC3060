/**
 * @file book.js
 * @description Practice json
 * 
 */

// An object is collection of key:value pairs
let book = {
    title: "Artificial Intelligence",
    author: "Patrick Henry Winston",
    year: "1993"
}
console.log(book);

console.log("Details about the book: ");
// Traverse over keys of a object
for(let key in book) {
    console.log(`${capitialize(key)}: ${book[key]}`);
}

/* Capitalize a string by making the first letter upper case */
function capitialize(str) {
    // Extract the first letter and ToUpperCase it & Concatnate the newly UpperCase letter to the rest of the str
    return str[0].toUpperCase() + str.slice(1, str.length);
    
}