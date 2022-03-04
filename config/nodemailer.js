const nodeMailer = require('nodemailer');
const ejs = require('ejs');

const transporter = nodeMailer.createTransport({
    service:'gmail',
    host:'smtp',
    port:587,
    secure:false,
    auth:{
        user:'keshavjha2302@gmail.com',
        pass:'rmxeetwaazhfuicu'
    }
});

const renderTemplate = function(data, relativePath){
    let htmlTemplate;

    ejs.renderFile( relativePath, data,function(err, template){
        if(err){console.log('Error in rendering Template : ', err); return;}

        htmlTemplate = template;
    });
    return htmlTemplate;
};

module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
}