/**
 * @file ascii-text.js
 * @description This program receives a text from 3rd command line argument and prints it in ASCII art style by using figlet package.
 * @author Tuan Tran
 * @version 1.0.0
 * @date 2025-02-01
 * @example node ascii-text.js [Text] <text color> <background color>
 * @requires figlet, chalk
 * @notes
 * - The text color and background color are optional. If not provided, the default is used
 * - error handling is not done yet.
 */

const figlet = require('figlet');   
const chalk = require('chalk');
const text = process.argv[2];
let color = process.argv[3] || "white"; // Default color is white
let bgColor = process.argv[4] || "black"; // Default background color is black

// Function to capitalize the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// follow chalk's naming convention for color and bgCOLOR
color = color.toLowerCase();
bgColor = "bg" + capitalize(bgColor); 

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
        console.log(chalk[bgColor](chalk[color](data)));
});
}