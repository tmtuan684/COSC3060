/**
 * @file salutation.js
 * @author Tuan Tran
 * @version 1.0
 * @date 2025-02-01
 * @description This program takes the user's name from the command line arguments and prints a greeting message
 * @example node salutation.js Tuan
 */
const yourName = process.argv[2]; // Get command line arguments, excluding the first two default ones
if (yourName == null) {
    console.log("You have not given your name, haven't you?");
    console.log("See you next time!");
}
else {
    console.log("Hello, " + yourName + "!");
}