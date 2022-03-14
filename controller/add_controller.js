const nodeMailer = require('../nodemailer/add_task/add_task_mailer');
const path = require('path');

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

        nodeMailer.addTaskMail(req, Task, path.join(__dirname, '../views/nodemailer'));
        console.log(Task);
        res.redirect('back');
    });
};

module.exports.complete = async function(req, res){

    try {
        let Task = await task.findById(req.params.id);
        Task.finished = true;
        Task.save();
        console.log('True done');
        return res.redirect('back');
        
    } catch (err) {
        console.log('Error in addController inside complete : ', err);
        return;
    }
    
    
}

