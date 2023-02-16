const express = require('express');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const config = require('./config');
const authMiddleware = require('./middlewares/authMiddleware')
const setupViewEngine = require('./config/viewEngine');
const initDatabase = require('./config/db');

const app = express();
setupViewEngine(app);

app.use(express.static('src/public'));
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use(authMiddleware.auth)
app.use(routes);

initDatabase()
	.then(() =>
		app.listen(config.PORT, () =>
			console.log(`Server listening on port:${config.PORT}...`)
		)
	)
	.catch((err) => console.error(err.message));
