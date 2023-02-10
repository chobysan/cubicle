const mongoose = require('mongoose');

const config = require('./index')

const initDatabase = async () => {
	mongoose.set('strictQuery', true);
	await mongoose.connect(config.DB_URI);
	console.log('DB connected');
};

module.exports = initDatabase;
