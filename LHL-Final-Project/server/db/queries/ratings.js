// db/queries/notes.js
const db = require('../../configs/db.config');

const getRatingsForNote = id => {
    return db.query('SELECT * FROM ratings WHERE note_id = $1;', [id]).then(data => {
        return data.rows;
    });
};

module.exports = {getRatingsForNote};