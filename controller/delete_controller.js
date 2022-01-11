
// importing the task schema
const task = require('../models/tasks');

// function to delete the task
module.exports.delete = function(req, res){
    
    // fetching the id
    var id = req.body.id;


    // if there is atleast one task is choosen
    // then we will run for each loop to fetch all the 
    // id of the choosen task and then delete it.
    if(id != undefined){
        for(let elem of id){
            task.findByIdAndDelete(id, function(err){
                if(err){
                    console.log("Error:", err);
                    return;
                }
            });
        }
    }


    // Atlast we will be redirecting to our home page
    return res.redirect('back');

    
};