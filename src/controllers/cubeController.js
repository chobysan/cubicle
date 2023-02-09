const Cube = require('../models/cube');
const db = require('../db.json');

exports.getCreateCube = (req, res) => {
	res.render('create');
};

exports.postCreateCube = (req, res) => {
	const { name, description, imageUrl, difficultyLevel } = req.body;

	const cube = new Cube(name, description, imageUrl, difficultyLevel);

	Cube.save(cube);

	res.redirect('/');
};

exports.getDetails = (req, res) => {
	const cubeId = Number(req.params.cubeId);

	if (!cubeId) {
		return res.redirect('404');
	}
	const cube = db.cubes.find((x) => x.id === cubeId);

	if (!cube) {
		return res.redirect('404');
	}
	res.render('details', { cube });
};
