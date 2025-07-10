/**
 * @file ascii-text.js
 * @description This program receives a text from 3rd command line argument and prints it in ASCII art style by using figlet package.
 * @author Tuan Tran
 * @version 1.0.0
 * @date 2025-02-01
 * @example node ascii-text.js "Hello World"
 */


const figlet = require('figlet');
const text = process.argv[2];

 if (text == null || text.length == 0) {
    console.log("You have not given any text, haven't you?");
    console.log("See you next time!");
 } else {
    figlet(text, (err, data) => {
        if (err) {
            console.error('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
});
}