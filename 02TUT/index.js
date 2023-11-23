const fs = require('fs'); //file system module
const path = require('path'); //path module
//we can use the fs module to read and write files on the server

/*
fs.readFile('./lorem.txt', (error, data) => {
    if (error) throw error;
    console.log(data.toString());
})*/

fs.readFile('./sample.txt', (error, data) => {
    if (error) throw error;
    console.log(data.toString());
})

console.log("hey there!") //this will run first because readFile is asynchronous

//fs module error handling
process.on('uncaughtException', error => {
    console.error(`There was an error:  ${error.message}`); //error message
    // process.exit(1); //exit with failure
});

//fs module read file
fs.readFile(path.join(__dirname, 'files', 'sample.txt'), (error, data) => {
    if (error) throw error;
    console.log(data.toString());
})

//fs module write file
fs.writeFile(path.join(__dirname, 'files', 'sample.txt'), 'Nice to meet you.', error => {
    if (error) throw error;
    console.log('Write complete');
})

//fs module append file
fs.appendFile(path.join(__dirname, 'files', 'sample.txt'), 'Nice to meet you.', error => {
    if (error) throw error;
    console.log('Append complete');
})