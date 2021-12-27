// Importing express
const express = require('express');
// Defining port for server
const port = process.env.PORT || 3800;

// setting up database
const db = require('./config/mongoose');

// Firing express
const app = express();

// middleware for accessing the form data
app.use(express.urlencoded());



// Middleware for accessing the static file
app.use(express.static('assets'));

// Middleware for accessing index.js from route folder
app.use('/', require('./route/index'));

// setting up view engine and file extension
app.set('view engine', 'ejs');
app.set('views', './views');


// Starting up our server using app.listen
app.listen(port, function(err){
    if(err){
        console.log("Error : ", err);
        return;
    }
    console.log(`Server is running fine on port ${port}`);
});