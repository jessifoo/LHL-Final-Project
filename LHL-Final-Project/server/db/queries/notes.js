// db/queries/notes.js
const db = require('../../configs/db.config');

const getAllNotes = () => {
	return db.query("SELECT * FROM notes;").then(data => {
		return data.rows;
	})
}

const getNotesForUser = id => {
	return db.query("SELECT * FROM notes WHERE user_id = $1;", [id]).then(data => {
		return data.rows;
	})
}
// Query to add new notes
const addNotes = ({title, body, user_id, class_id, semester_id }) => {
	return db.query(`INSERT INTO notes (title, body, picture, publishDate, user_id, class_id, semester_id)
	VALUES($1, $2, "", current_timestamp,$3, $4, $5)
	RETURNING *;
	`, [title,body,user_id, class_id, semester_id])
	.then(data => {
		return data;
	})
	
	};

module.exports = {getAllNotes, getNotesForUser, addNotes}