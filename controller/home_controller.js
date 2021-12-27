// controller function 
// Importing the task schema
const tasks = require('../models/tasks');

// This home function is going to
//  render the home page on the browser
module.exports.home = function(req, res){

    tasks.find({}, function(err, TaskList){
        if(err){
            console.log("Error while Fetching data: ", err);
            return;
        }

        return res.render('home', {
            title: "TODO App", 
            task:TaskList
        });

    });
    
};