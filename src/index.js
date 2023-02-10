const express = require('express');

const routes = require('./routes');
const config = require('./config/index');
const setupViewEngine = require('./config/viewEngine');
const initDatabase = require('./config/db');

const app = express();
setupViewEngine(app);

app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

initDatabase()
	.then(() => app.listen(config.PORT, () => console.log(`Server listening on ${config.PORT}...`)))
	.catch((err) => console.error(err));
