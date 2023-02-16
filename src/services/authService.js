const User = require('../models/User');

exports.getUser = (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password });

exports.login = async (username, password) => {
	const user = await this.getUser(username);
	const isValid = await user.validatePassword(password)
	if (!user || !isValid) {
		throw 'Invalid username or password!';
	}
	return user;
};
