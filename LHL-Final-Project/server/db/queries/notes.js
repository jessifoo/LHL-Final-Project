// db/queries/notes.js
const db = require('../../configs/db.config');

const getAllNotes = () => {
	return db.query("SELECT * FROM notes;").then(data => {
		return data.rows;
	})
}

const getNotesForUser = id => {
	return db.query("SELECT * FROM notes; WHERE user_id = $1", [id]).then(data => {
		return data.rows;
	})
}

module.exports = {getAllNotes, getNotesForUser}