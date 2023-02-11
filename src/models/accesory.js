const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
	name: {
		type: 'string',
		required: true,
	},
	imageUrl: {
		type: 'string',
		required: true,
	},
	description: {
		type: 'string',
		required: true,
        maxLength: 50,
	},
});

const Accessory = mongoose.model('Accessory', accessorySchema)

module.exports = Accessory;
