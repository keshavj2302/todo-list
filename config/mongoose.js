// importing mongoose module
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

// Connecting the mongoose module
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Todo_list');

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

module.exports = db;