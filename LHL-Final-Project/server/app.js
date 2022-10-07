require('dotenv').config()
const {ENVIROMENT, PORT} = process.env;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieSession = require("cookie-session");

// routes import
const indexRoutes = require('./routes/indexRoutes');


const app = express();


// middleware setup
app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());
const cors = require('cors') ;app.use(cors())

app.use(cookieSession({
  name: 'session',
  keys: ['hello'],
  maxAge: 24 * 60 * 60 * 1000 //24 hours
}));


app.use('/', indexRoutes)


app.get('/', (req, res) => {
	res.json({greetings: 'hello world'});
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

module.exports = app;