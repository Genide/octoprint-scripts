let transporter = require('./EmailTransporter');

let remoteAddress = process.argv[2] || 'Unknown IP';
let time = (new Date().toLocaleString('en-US'));

var message = {
    to: 'danielhuannguyen@gmail.com',
    subject: `Client closed connection to Octoprint`,
    text: `Client closed connection to Octoprint from ${remoteAddress} at ${time}.`
};

transporter.sendMail(message);