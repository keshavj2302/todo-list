const deleteMailer = require('../nodemailer/delete_Task/delete_task_mailer');
// importing the task schema
const task = require('../models/tasks');
const path = require('path');

// function to delete the task
module.exports.delete = function(req, res){
    // fetching the id
    var id = req.body.id;
    console.log('########', id);


    // if there is atleast one task is choosen
    // then we will run for each loop to fetch all the 
    // id of the choosen task and then delete it.
    if(id != undefined){
        if(typeof(id)=='string'){

            task.findByIdAndDelete(id, function(err, Task){
                if(err){
                    console.log("Error:", err);
                    return;
                }
                // console.log('???????%%%%%%');
                deleteMailer.deleteTaskMailer(req, Task, path.join(__dirname, '../views/nodemailer'));
                console.log('Successfully deleted Task!!! : ', Task);
                console.log('Task deleted successfully !!!');
            });

        }else{
            for(let elem of id){
                task.findByIdAndDelete(elem, function(err){
                    if(err){
                        console.log("Error:", err);
                        return;
                    }
                    console.log('Item deleted successfully !!!!');
                });
            }
        }
        
    }


    // Atlast we will be redirecting to our home page
    return res.redirect('back');

    
};