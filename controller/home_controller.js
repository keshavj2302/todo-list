// controller function 
// Importing the task schema
const tasks = require('../models/tasks');
const User = require('../models/user');

// This home function is going to
//  render the home page on the browser
module.exports.home = function(req, res){

    if(!req.isAuthenticated()){
        return res.redirect('/user/signin');
    }

    tasks.find({}, function(err, TaskList){
        if(err){
            console.log("Error while Fetching data: ", err);
            return;
        }
        // console.log(req.body);
        // User.findById(req.user.id, function(err, user){
        //     if(err){console.log("Error in finding user in home_controller!!");
        //         return res.redirect('/user/signin');
        // }
        //     if(!user || user.password != req.user.password){
        //         console.log('Invalid username / password');
        //         return res.redirect('/user/signin');
        //     }

            

        // });

        console.log(req.user);

        return res.render('home', {
            title: "TODO App",
            task:TaskList,
            // user:user
        });

        

    });
    
};