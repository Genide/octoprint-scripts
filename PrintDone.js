let transporter = require('./EmailTransporter');

var getTimeElapsed = function (totalSeconds) {
    secondsRem = parseFloat(totalSeconds);
    var days = Math.floor(totalSeconds / 3600 / 24);
    secondsRem %= (3600 * 24);

    var hours = Math.floor(secondsRem / 3600);
    secondsRem %= 3600;

    var minutes = Math.floor(secondsRem / 60);
    secondsRem %= 60;

    var seconds = Math.floor(secondsRem / 1);

    var millisec = (secondsRem % 1 * 1000).toPrecision(3);

    var timeElapsed = '';
    timeElapsed += (days || timeElapsed) ? maybePluralize(days, 'day') + ' ' : '';
    timeElapsed += (hours || timeElapsed) ? maybePluralize(hours, 'hour') + ' ' : '';
    timeElapsed += (minutes || timeElapsed) ? maybePluralize(minutes, 'minute') + ' ' : '';
    timeElapsed += (seconds || timeElapsed) ? maybePluralize(seconds, 'second') + ' ' : '';
    timeElapsed += (millisec || timeElapsed) ? maybePluralize(millisec, 'millisecond') + ' ' : '';

    return timeElapsed.trim();
};

var maybePluralize = function (count, noun, suffix = 's') {
    return `${count} ${noun}${count !== 1 ? suffix : ''}`;  
};

let filename = process.argv[2] || 'print';
let filepath = process.argv[3] || 'unknown';
let origin = process.argv[4] || 'unknown';  // Can either be local or sdcard
let timeElapsed = getTimeElapsed(process.argv[5]) || 'unknown';
let time = new Date().toLocaleString('en-US');

var message = {
    to: 'danielhuannguyen@gmail.com',
    subject: `Print of ${filename} completed`,
    text: `Print of ${filename} completed at ${time} from ${origin} storage. Time elapsed: ${timeElapsed}`,
    attachments:[
        {   // use URL as an attachment
            filename: `${filename}.jpg`,
            path: 'http://127.0.0.1/webcam/?action=snapshot'
        }
    ]
};



transporter.sendMail(message);