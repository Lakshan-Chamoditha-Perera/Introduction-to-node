const fs = require('fs');

fs.readFile('./lorem.txt', (error, data) => {
    if (error) throw error;
    console.log(data.toString());
})

//fs module error handling
process.on('uncaughtException',error => {
    console.error(`There was an error:  ${error.message}`); //error message
    process.exit(1); //exit with failure
})