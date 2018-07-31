const winston = require('winston');

const path = require('path');

let logger = new (winston.Logger)({
    transports: [
        // new (winston.transports.Console)({
        //     colorize: true
        // }),
        new (winston.transports.File)({
            filename: path.resolve('./logs/combined.log'),
            timestamp: () => {
                let currentMoment = new Date(Date.now());
                return currentMoment.toLocaleString('ru', { timeZone: 'Europe/Minsk' });
            }
        }),
        new (winston.transports.File)({
            name: 'error-log',
            filename: path.resolve('./logs/error.log'),
            level: 'error'
        })
    ]
});

module.exports = { logger };