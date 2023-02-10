const { Schema, model } = require('mongoose');

const cubeSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
		maxLength: 50, // check real length
	},
	imageUrl: {
		type: String,
		required: true,
		// add http validation
	},
	difficultyLevel: {
		type: Number,
		required: true,
		max: 6,
		min: 1,
	},
});

const Cube = model('Cube', cubeSchema);

module.exports = Cube;
