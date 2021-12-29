
const User = require('../models/user');

module.exports.signUp = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('user_signUp');
};

module.exports.signIn = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('user_signIn');
};

module.exports.create = function(req, res){
    User.findOne( {username: req.body.username}, function(err, user){
        if(err){console.log('Error while creating user in user_controller!!');
        return res.redirect('/user/signin');}
        if(!user){
            User.create(req.body);
        }
        return res.redirect('/user/signin');
    });
};

module.exports.createSession = function(req, res){
    if(req.body){
        User.findOne({username:req.body.username}, function(err, user){
            if(err){console.log('Error in createSession in user_controller');
            return res.redirect('/user/signin');
        }
            if(!user || user.password != req.body.password){
                console.log('Invalid Username / password');
                return res.redirect('back');
            }
            return res.redirect('/');
        });
    }else{
        return res.redirect('back');
    }
};

module.exports.destroySession = function(req, res){
    if(req.isAuthenticated()){
        req.logout();
    }
    return res.redirect('/user/signin');
};