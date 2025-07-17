/**
 * @file book.js
 * @description Practice json
 * 
 */

// An object is collection of properties each of which is defined in a key:value pair
const book1 = {
    title: "Artificial Intelligence",
    author: "Patrick Henry Winston",
    year: "1993"
};
const book2 = {
    title: "Pattern Recognition and Machine Learning",
    author: "Christopher M Bishop",
    year: "2006"
};
const book3 = {
    title: "Deep learning",
    author: "TBC",
    year: "2020"
};
// Array of Objects
let bookCollection = [book1, book2, book3]

console.log("My book collection");

bookCollection.forEach(book => {
    console.log("----------------------- ");
    // Traverse over keys of a object
    for(let key in book) {
        console.log(`${capitialize(key)}: ${book[key]}`);
    }
});

/* Capitalize a string by making the first letter upper case */
function capitialize(str) {
    // Extract the first letter and ToUpperCase it & Concatnate the newly UpperCase letter to the rest of the str
    return str[0].toUpperCase() + str.slice(1, str.length);
    
}