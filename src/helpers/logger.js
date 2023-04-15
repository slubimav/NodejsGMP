import winston  from 'winston'

const transports = [
	new winston.transports.Console({
		level: 'debug'
	}),
	new winston.transports.File({
		filename: 'logs/errors.log',
		level: 'error',
		maxsize: 5242880,
	}),
];

const logger = winston.createLogger({
	levels: winston.config.syslog.levels,
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.printf((msg) => {
			return `${msg.level}: ${msg.message}`;
		})
	),
	transports: transports
});

export default logger
