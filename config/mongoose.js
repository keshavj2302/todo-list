// importing mongoose module
const mongoose = require('mongoose');

// Connecting the mongoose module
mongoose.connect('mongodb://localhost/Todo_list');

// returning db as the connection to database
const db = mongoose.connection;

// If an error will be produced then this function will work
db.on('error', console.error.bind('console', "Error while connecting to database"));

// If connection is working then this function will be executed
db.on('open', function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Successfully connected to the database:");
});
