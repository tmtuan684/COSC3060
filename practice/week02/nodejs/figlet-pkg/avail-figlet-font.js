/**
 * @file avail-figlet-font.js
 * @description This program lists all available figlet fonts.
 * @author Tuan Tran
 * @version 1.0.0
 * @date 2025-02-01
 * @example node avail-figlet-font.js
 */
const figlet = require('figlet');

console.log("Available figlet fonts");
console.log("----------------------");
figlet.fonts(function (err, fonts) {
  if (err) {
    console.log("something went wrong...");
    console.log(err);
    return;
  }
  console.dir(fonts);
});