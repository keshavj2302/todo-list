const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.use(new localStrategy({
    usernameField:'username'
}, 
    function(username, password, done){
        User.findOne({username:username}, function(err, user){
            if(err){console.log('Error while finding the User in localStrategy'); return done(err);}

            if(!user || user.password != password){
                console.log('Invalid username / Password');
                return done(null, false);
            }
            return done(null, user);
        });
    }
));

// Serializing the user

passport.serializeUser(function(user, done){
    return done(null, user._id);
});

// Deserializing the user
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){console.log("Error while deserializing", err); return done(err);}

        return done(null, user);
    });
});

// checkAuthentication middleware
passport.checkAuthentication = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/user/signin');
};

// setAuthenticated User
passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    return next();
};