require('dotenv').config();
const {ENVIRONMENT: ENVIRONMENT, PORT} = process.env;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// routes import
const indexRoutes = require('./routes/indexRoutes');


const app = express();


// middleware setup
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());
const cors = require('cors') ;app.use(cors());

app.use('/', indexRoutes);


app.get('/', (req, res) => {
    res.json({greetings: 'hello world'});
});

// app.post('/notes', (req, res) => {
//   console.log("posting")
//   // notes.addNotes(req.body).then(data => {
//     res.json({note: 'data'})
//   // })
// });

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

module.exports = app;