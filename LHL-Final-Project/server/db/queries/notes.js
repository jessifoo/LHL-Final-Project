// db/queries/notes.js
const db = require('../../configs/db.config');

const getAllNotes = () => {
	return db.query("SELECT * FROM notes;").then(data => {
		return data.rows;
	})
}

const getNotesForUser = userId => {
	return db.query("SELECT * FROM notes WHERE user_id = $1;", [userId]).then(data => {
		return data.rows;
	})
}
// Query to add new notes
const addNotes = ({title, body, user_id, class_id, semester_id }) => {
	return db.query(`INSERT INTO notes (id,title, body, picture, publishDate, user_id, class_id, semester_id)
	VALUES(DEFAULT,$1, $2, '', current_timestamp,$3, $4, $5)
	RETURNING *;
	`, [title,body,user_id, class_id, semester_id])
	.then(data => {
		console.log("DATA:",data.rows)
		return data.rows;
	})
	.catch(err => {
	 console.log(err)
	})
	
	}

	const deleteNote = noteId => {
		return db.query(`DELETE FROM notes WHERE id = $1`, [noteId])
		.then(data =>{
			return data.rows;
		} )
	}


module.exports = {getAllNotes, getNotesForUser, addNotes, deleteNote}