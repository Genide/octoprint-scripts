let transporter = require('./EmailTransporter');

let filename = process.argv[2] || 'print';
let filepath = process.argv[3] || 'unknown';
let origin = process.argv[4] || 'unknown';  // Can either be local or sdcard
let time = process.argv[5] || (new Date().toLocaleString('en-US'));

var message = {
    to: 'danielhuannguyen@gmail.com',
    subject: `Print of ${filename} completed`,
    text: `Print of ${filename} completed at ${time} from ${origin} storage`,
    attachments:[
        {   // use URL as an attachment
            filename: `${filename}.jpg`,
            path: 'http://127.0.0.1/webcam/?action=snapshot'
        }
    ]
};

transporter.sendMail(message);