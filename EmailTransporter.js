let nodemailer = require('nodemailer');
let emailConfig = require('./EmailConfig.json');

// console.log(emailConfig);
let transporter = nodemailer.createTransport(`smtps://${emailConfig.username}:${emailConfig.password}@${emailConfig.smtp}`);

// Debugging purposes only
transporter.verify(function(error, success) {
    if (error) {
         console.log(error);
    } else {
         console.log('Server is ready to take our messages');
    }
 });
console.log(process.argv);

module.exports = transporter;