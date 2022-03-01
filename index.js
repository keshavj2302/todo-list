// Importing express
const express = require('express');
// Defining port for server
const port = process.env.PORT || 3800;
const env = require('./config/environment');
const path = require('path');
const logger = require('morgan');
// setting up database
const db = require('./config/mongoose');

// importing express-ejs-layouts
const expressLayouts = require('express-ejs-layouts');

// importing express-session
const session = require('express-session');

// importing passport
const passport = require('passport');
const passportLocal = require('./config/passport_local_strategy');

// import connect-mongo
const mongoStore = require('connect-mongo')(session);

// Firing express
const app = express();


// Import sassMiddleware
const sassMiddleware = require('node-sass-middleware');

app.use(logger(env.morgan.mode, env.morgan.options));

app.use(sassMiddleware({
    src:path.join(__dirname, env.assets_path, '/SCSS'),
    dest: path.join(__dirname, env.assets_path, '/CSS'),
    debug:true,
    outputStyle: 'extended',
    prefix: '/CSS'
}));


app.use(session({
    name:'TodoList',
    secret:env.secret_key,
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 * 100)
    },
    store: new mongoStore({
        mongooseConnection:db,
        autoRemove:'disabled'
    },
        function(err){console.log('Error in MongoStore', err); return;}
    )
}));



app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// expressLayouts in middleware
app.use(expressLayouts);

// middleware for accessing the form data
app.use(express.urlencoded());




// Middleware for accessing the static file
app.use(express.static(`.${env.assets_path}`));

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