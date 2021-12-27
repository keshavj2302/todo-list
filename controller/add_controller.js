

// Importing the task schema
const task = require('../models/tasks');

// This is the add function that is going to add the 
// data in the database
module.exports.add = function(req, res){
    task.create(req.body, function(err, Task){
        if(err){
            console.log("Error: ", err);
            return;
        }
        console.log(Task);
        res.redirect('back');
    });
};

