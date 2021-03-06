const winston = require('winston');

const path = require('path');

const logger = winston.createLogger({
    transports: [
        new (winston.transports.File)({
            filename: path.resolve('./logs/combined.log'),
            timestamp: () => {
                let currentMoment = new Date(Date.now());
                return currentMoment.toLocaleString('ru', { timeZone: 'Europe/Minsk' });
            }
        }),
        new (winston.transports.Console)({
            colorize: true
        })
    ]
});

module.exports = { logger };