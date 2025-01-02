const winston = require('winston');
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
    level: 'info',
    format:
        combine(
            timestamp(),
            json(),
        ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }

module.exports = function buildLogger(service) {
    return {
        log: ( level, message ) => {
            logger.log(level , {message, service });
        },
        error: ( message ) => {
            logger.error( { message, service } );
        },
    }
};