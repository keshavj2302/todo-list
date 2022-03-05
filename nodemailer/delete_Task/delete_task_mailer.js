const nodeMailer = require('../../config/nodemailer');
const path = require('path');

exports.deleteTaskMailer = function(req, task, path1){
    let htmlContent = nodeMailer.renderTemplate({task:task}, path.join(path1, '/delete_Task.ejs'));
    nodeMailer.transporter.sendMail({
        from:'keshavjha2302@gmail.com',
        to:req.user.username,
        subject:`${task.name}`,
        html: htmlContent
    }, 
        function(err, info){
            if(err){console.log('Error inside deleteTaskMailer', err); return;}
            console.log('Successfully sent mail!!', info);
        }
    )
}