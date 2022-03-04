const nodeMailer = require('../../config/nodemailer');
const Path = require('path');


exports.addTaskMail = function(req, task, path){
    let htmlContent = nodeMailer.renderTemplate({task:task}, Path.join(path,'/add_task.ejs'));
    nodeMailer.transporter.sendMail({
        from:'keshavjha2302@gmail.com',
        to:req.user.username,
        subject:'New Task Added to your Todo',
        html:htmlContent
    }, function(err, info){
        if(err){console.log('Error inside addTaskMail function : ', err); return;}
        console.log("Info : ", info);
    });
};