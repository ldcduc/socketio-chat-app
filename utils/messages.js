const moment = require('moment-timezone');
function formatMessage(username, text) {
    return {
        username,
        text,
        time: moment().tz('Asia/Bangkok').format('h:mm a')
    }
}

module.exports = formatMessage;
